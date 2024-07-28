import { Card, CardBody } from '@nextui-org/card';
import { Avatar, Button } from '@nextui-org/react';
import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";

const Rightside = () => {
    return (
        <div className='mt-6 h-[100vh]'>
            <Card className='h-[80vh] w-[65%]'>
                <CardBody>
                   <div>
                   
                   <Button className='bg-green-600 mt-3'>
                   <CiCirclePlus className='text-lg' />  Create Office
                    </Button>
                    <p className='mt-4'>Office #1</p>


                    <Card className='h-[340px] mt-4 bg-blue-100'>
                   <CardBody>
                   <div>
                    <p>Main office</p>
                    <CiLocationOn />
                    <div>
                        <Card className='w-52 h-64 mt-2'>
                            <CardBody className='mt-6'>
                            <div className='flex justify-center items-center'>
                            <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
                            
                            </div>
                            <h2 className='text-center text-sm mt-2'>Maruf khan</h2>
                            <p className='text-center flex justify-center items-center text-xs gap-1 mt-2'><FaPhoneAlt />014566744656</p>
                            <p className='text-center flex justify-center items-center text-xs gap-1 mt-2'><MdOutlineEmail />marufkhan@gmail.com</p>
                           <p className='flex justify-center items-center mt-2 gap-2'>
                           <IoLogoLinkedin className='text-blue-500 text-xl ' />
                           <FaFacebookSquare  className='text-blue-500 text-xl ' />
                           </p>
                           <p className='flex justify-center items-center mt-2 gap-2'>
                         <MdOutlineEditNote />
                           </p>
                            </CardBody>
                            </Card>
                    </div>
                   </div>
                   </CardBody>

                        
                    </Card>



                     </div> 
                </CardBody>
            </Card>
        </div>
    );
};

export default Rightside;