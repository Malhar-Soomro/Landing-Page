import React from 'react';
import MyCard from "./MyCard"
import formulaIMG from "../assets/formulaIMG.jpg";
import factoryIMG from "../assets/factoryIMG.jpg";
import mathIMG from "../assets/mathIMG.jpg";
import pantingIMG from "../assets/pantingIMG.jpg";
import { Typography } from '@material-ui/core';

// Redesigning my site <br /> increased sales by over <br /> 400% in one week.

// Design handoff: What <br/> engineers really want to see

// A comprehensive list of <br/> human-computer <br/> interactions

// Why do people hate <br/> redesigns?

const data = [
    {
        text: <div>Redesigning my site <br /> increased sales by  <br /> over 400% in one week.</div>,
        image: formulaIMG
    },
    {
        text: <div>Design handoff: What <br /> engineers really want to see.</div>,
        image: factoryIMG
    },
    {
        text: <div>Design handoff: A comprehensive list of<br /> human-computer <br />interactions.</div>,
        image: mathIMG
    },
    {
        text: <div>Why do people hate <br /> redesigns?</div>,
        image: pantingIMG
    }
];


const Cards = () => {
    return (
        <div className='mt-32 '>
            <div className="heading flex items-center justify-center">

                <div className='border-b border-gray-300 w-64'>
                </div>
                <Typography className="mx-4 font-myFont font-semibold text-sm">
                    We share our thoughts on design
                </Typography>
                <div className='border-b border-gray-300 w-64'>
                </div>
            </div>
            <div
                className='flex gap-6 justify-center'>
                {data.map(myData => (
                    <MyCard text={myData.text}
                        image={myData.image} />
                ))}
            </div >
        </div>
    );
}

export default Cards;