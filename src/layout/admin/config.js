import AppsIcon from '@mui/icons-material/Apps';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import SegmentIcon from '@mui/icons-material/Segment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export const getNavContent=()=>{

    return [
        {
            path:'/admin/panel/overview',
            title:'Site Overview',
            show: true,
            icon:<AppsIcon/>
        },
        {
            path:'/admin/panel/suite',
            title:'Suite',
            show: true,
            icon:<BedroomChildIcon/>
        },
        {
            path:'/admin/panel/suite-types',
            title:'manage suite types',
            show: true,
            icon:<AirlineSeatIndividualSuiteIcon/>
        },
        {
            path:'/admin/panel/bookings',
            title:'Bookings',
            show: true,
            icon:<SegmentIcon/>
        }
        ,{
            path:'/admin/panel/employees',
            title:'Manage employees',
            show: true,
            icon:<SupportAgentIcon/>
        }
        ,{
            path:'/admin/panel/customers',
            title:'Manage customers',
            show: true,
            icon:<ManageAccountsIcon/>
        },

    ]
}