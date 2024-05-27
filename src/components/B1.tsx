import Button from 'react-bootstrap/Button';
{
    /* The following line can be included in your src/index.js or App.js file */
  }
  import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function B1() {
  return (
    <div>
    <div className='B1'>
    <img src="https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/hinh-nen-3d-2.jpg" alt="" />
    <form action="">
        <h4>LOGIN</h4>
        <label htmlFor="">Email</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="text" />
        <h6 style={{textAlign:'right'}}>Forgot password</h6>
        <Button  variant="primary">Login</Button>
        <br />
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5px'}}>
        <div className='hr'></div> or <div className='hr'></div>
        </div>
        <br />
        <Button variant="light">Register Now</Button>
    </form>
    </div>
    </div>
  );
}

export default B1;