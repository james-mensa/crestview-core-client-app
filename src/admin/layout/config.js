import AppsIcon from '@mui/icons-material/Apps';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import SegmentIcon from '@mui/icons-material/Segment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { appRoutePaths } from '../../config/routePaths';
export const getNavContent=()=>{

    return [
        {
            path:appRoutePaths.admin.ADMIN_OVERVIEW_PATH,
            title:'Site Overview',
            show: true,
            icon:<AppsIcon/>
        },

        {
            path:appRoutePaths.admin.ADMIN_MANAGE_SUITE_PATH,
            title:'manage suite types',
            show: true,
            icon:<BedroomChildIcon/>
        },
        {
            path:'/admin/bookings',
            title:'Bookings',
            show: true,
            icon:<SegmentIcon/>
        }
        ,{
            path:'/admin/manage-employee',
            title:'Manage employees',
            show: true,
            icon:<SupportAgentIcon/>
        }
        ,{
            path:'/admin/customers',
            title:'Manage customers',
            show: true,
            icon:<ManageAccountsIcon/>
        },

    ]
}