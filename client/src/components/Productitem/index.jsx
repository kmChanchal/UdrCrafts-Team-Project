import React from 'react'
import "../Productitem/style.css"
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { GoHeart } from "react-icons/go";
import { IoGitCompare } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function ProductItem() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className='productItem shadow-lg rounded-md overflow-hidden border-2  border-[rgba(0,0,0,0.1)] '>
      <div className='imgWrapper w-[100%] h-[250px] overflow-hidden rounded-md relative'>
        <img src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt=""  className='w-full'/>

      <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-orange-500 text-white rounded-full p-1 text-[12px] font-[500]  '> 10%</span>


      <div className='actions'>
      <Button> </Button>
      </div>
      </div>

      <div className='info p-3 py-3 '>
        <h6 className='text-[14px]'><Link to={'/'} className='link transition-all'>Flying Machine</Link></h6>
        <h3 className='text-[16px] title mt-1 font-[500] text-[#000]' ><Link to={'/'} className='link transition-all'>Women Wide Leg High-Rise ...</Link></h3>
        <div className='py-1'>
         <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
        </div>

    <div className='flex items-center gap-4 py-1'>
      <span className='oldPrice line-through text-gray-500 text-[16px] font-[500]'>$58.00</span>
      <span className='oldPrice text-orange-600 font-bold'>$12.00</span>
    </div>
      </div>

    </div>
  );
}

export default ProductItem
