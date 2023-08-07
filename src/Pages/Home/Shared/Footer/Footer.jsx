import logo from '../../../../assets/image/Group_1-removebg-preview.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className='px-20 py-10 bgdiv '>
            <div className='flex justify-center gap-20 mb-16'>
                <div>
                    <div className='flex justify-start items-center gap-3 mb-6'> 
                        <img src={logo} alt="logo" />
                        <h1 className='text-2xl font-bold font-sans'><span className='text-orange-400'>Doc</span>House</h1>
                    </div>
                    <p >Lorem Ipsum is simply dummy text of the<br></br> printing and typesetting industry. has been<br></br> since the printer took.</p>
                    <button className='btn btn-outline text-orange-400 mt-6'>Appointment</button>
                </div>
                <div className='pdiv'>
                    <h1 className='text-[18px] font-bold font-sans'>Quick Links</h1>
                    <p>About Us</p>
                    <p>Service</p>
                    <p>Doctors</p>
                    <p>Depertments</p>
                    <p>Online Payment</p>
                    <p>Contact Us</p>
                    <p>My Acount</p>
                </div>
                <div className='pdiv'>
                    <h1 className='text-[18px] font-bold font-sans'>Doc House Services</h1>
                    <p>Pediatric Clinic</p>
                    <p>Diagnosis Clinic</p>
                    <p>Cardiac Clinic</p>
                    <p>Laboratory Analysis</p>
                    <p>Gynecological Clinic</p>
                    <p>Personal Counseling</p>
                    <p>Dental Clinic</p>

                </div>
                <div className='pdiv'>
                    <h1 className='text-[18px] font-bold font-sans'>Working Hours</h1>
                    <p>Monday - 10 am to 7 pm</p>
                    <p>Tuesday - 10 am to 7 pm</p>
                    <p>Wednesday - 10 am to 7 pm</p>
                    <p>Thursday - 10 am to 7 pm</p>
                    <p>Friday - 10 am to 7 pm</p>
                    <p>Saturday - 10 am to 7 pm</p>
                    <p>Sunday - 10 am to 7 pm</p>
                </div>
            </div>
            <hr className='hrcolor'/>
            <p className='text-center mt-10'>Copyright © 2022 - All right reserved by Doc House Ltd</p>
        </div>
    );
};

export default Footer;