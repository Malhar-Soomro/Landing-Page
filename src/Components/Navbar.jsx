import React from 'react'
import Typography from '@material-ui/core/Typography';

const Navbar = () => {
    return (
        <div className='flex justify-between gap-5 py-2 items-center'>
            <div className='ml-4 items-center'>
                <Typography className="font-myFont">
                    LOGO
                </Typography>
            </div>

            <div className='flex gap-7 font-myFont items-center'>
                <Typography className="font-myFont cursor-pointer ">
                    Home
                </Typography>
                <Typography className="font-myFont cursor-pointer">
                    Articles
                </Typography>
                <Typography className="font-myFont cursor-pointer">
                    Pricing
                </Typography>
                <Typography className="font-myFont cursor-pointer">
                    About
                </Typography>
                <Typography className="font-myFont cursor-pointer">
                    Contact
                </Typography>
            </div>

            <div className='flex gap-5 mr-4 items-center'>
                <Typography
                    style={{ textTransform: 'none' }}
                    variant="button" className="bg-Login
                 px-5 py-2 border-2 rounded-lg font-myFont  font-semibold cursor-pointer text-sm ">
                    Log In
                </Typography>

                <Typography
                    style={{ textTransform: 'none' }}
                    variant="button"
                    className="bg-StartFreeTrial text-gray-200 px-6 border-2 rounded-lg py-3 font-myFont cursor-pointer tracking-wider text-sm">
                    Start Free Trial
                </Typography>
            </div>
        </div>
    );
}

export default Navbar
