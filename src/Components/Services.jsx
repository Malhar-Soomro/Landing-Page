import React from 'react'
import { Typography } from '@material-ui/core';

const Services = () => {
    return (
        <div className="flex justify-center items-center flex-col mt-28">
            <Typography
                // display="inline"
                className="text-center font-semibold text-modernway"
                variant='h2'
            >
                A modern way to <br />
                build websites.
            </Typography>
            <Typography
                className="text-center mt-6 text-empowerdesigners"
                variant='h5'
            >
                Empower designers to build professional, custom websites <br /> in a completely visual canvas with no code.
            </Typography>

            <Typography
                style={{ textTransform: 'none' }}
                variant="button"
                className="bg-StartFreeTrial text-gray-200 px-8 border-2 rounded-xl py-5 font-myFont cursor-pointer tracking-wider mt-6 text-base">
                Start free trial
            </Typography>

        </div>
    );
}

export default Services
