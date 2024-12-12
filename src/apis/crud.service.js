import { handleError } from "../config/errorHandler";
import BaseApi from "./ApiClient/BaseApi";

/**
 * Service class to handle API requests with various HTTP methods.
 */
class CrudService {
  /**
   * Generic method to handle API requests with dynamic content type and headers.
   *
   * @param {"get" | "post" | "put" | "delete" | "patch"} method - The HTTP method to be used for the request.
   * @param {string} endpoint - The endpoint URL (relative to the API base URL).
   * @param {object} [data] - The data to be sent with the request (optional).
   * @param {object} [headers] - The custom headers to be included in the request (optional).
   *
   * @returns {Promise<object>} - A promise that resolves to the API response in a standardized format.
   */
  async apiRequest(method, endpoint, data, headers) {
    let response = { message: "", success: false };

    try {
      const res = await BaseApi[method](endpoint, data, { headers });
      if ([200, 201, 202, 204, 205, 206].includes(res.status)) {
        let pagination = {
          current_page: null,
          page_size: null,
          total_pages: null,
          hasPreviousPage: false,
          hasNextPage: false,
        };

        if (res.data?.extras?.pagination) {
          const paginationData = res.data?.extras?.pagination;
          pagination = {
            current_page: paginationData.current_page,
            page_size: paginationData.page_size,
            hasPreviousPage: paginationData.previous_page ? true : false,
            hasNextPage: paginationData.next_page ? true : false,
            total_pages: paginationData.total_pages,
          };
        }

        return {
          message:
            res.status === 204
              ? "Request successful"
              : res.data?.message || "Request completed successfully.",
          data: res.status === 204 ? undefined : res.data?.data,
          pagination,
          success: true,
        };
      }

      return {
        ...response,
        message: `Unexpected response status: ${res.status}`,
      };
    } catch (error) {
      console.log({ API_ERROR: error });
      const errorMessage = handleError(error);
      response.message = errorMessage.message;
    }

    return response;
  }
}

export const crudService= new CrudService();
