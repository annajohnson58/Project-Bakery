import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import dashboard_icon from '../../assets/dashboard.png'
import product_icon from '../../assets/product.png'
import order_icon from '../../assets/order.png'
import { useNavigate } from 'react-router-dom'
import user_icon from '../../assets/user.png'
import Navbar from '../navbar/navbar'
import navlogo from '../../assets/logo.jpg';

 const Sidebar = () => {
    const navigate=useNavigate();
  return (
    <>
  
    <div className='sidebar'>
    <img src={navlogo} alt="Logo" className='nav-logo' />     
<Link to={'/dashboard'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={dashboard_icon} alt="" style={{width:"30px",height:"30px"}}/>
    <p>Dashboard</p>
</div>

</Link>
<Link to={'/orders'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={order_icon} alt=""  style={{width:"50px",height:"50px"}}  />
    <p>Orders</p>
</div>

</Link>
<Link to={'/product'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={product_icon} alt=""  style={{width:"50px",height:"50px"}}  />
    <p>Products</p>
</div>

</Link>

<Link to={'/users'} style={{textDecoration:"none"}}>
<div className="sidebar-item">
    <img src={user_icon} alt=""  style={{width:"50px",height:"50px"}}  />
    <p>Users</p>
</div></Link>

    </div>
    </>
  )
}
export default Sidebar;

