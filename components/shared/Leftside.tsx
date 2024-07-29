import { Card, CardBody } from '@nextui-org/card';
import { Button, Pagination, ScrollShadow } from '@nextui-org/react';
import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Leftside = () => {
    return (
        <div className='w-[450px] mt-6  h-[90vh]'>
           <Card className='h-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300'>
            <CardBody>
            <div>
            <Button className='bg-white text-blue-600' variant="bordered">
        + Add Note
      </Button>
            </div>
            <ScrollShadow hideScrollBar className="w-[400px] h-[400px]">
            <div className='mt-4'>
                <Card>
                    <CardBody >
                        <h2 className='font-bold flex justify-between'>Home <span className='flex'><MdEdit className='text-blue-500 text-lg' /> 
                        <MdDelete className='text-red-600 text-lg' /></span></h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet Earum ullam dolorem, voluptate tempore vero voluptatum corrupti eum dicta omnis placeat labore ipsum voluptatibus facere error quisquam quasi quidem, repellat minima.</p>
                        <div className='mt-4 flex justify-between'>
                            <p className='text-xs font-semibold'>2 minutes ago</p>
                            <p className='text-xs font-semibold'>03/01/2024</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className='mt-2'>
                    <CardBody >
                        <h2 className='font-bold flex justify-between'>Home <span className='flex'><MdEdit className='text-blue-500 text-lg' /> 
                        <MdDelete className='text-red-600 text-lg' /></span></h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet Earum ullam dolorem, voluptate tempore vero voluptatum corrupti eum dicta omnis placeat labore ipsum voluptatibus facere error quisquam quasi quidem, repellat minima.</p>
                        <div className='mt-4 flex justify-between'>
                            <p className='text-xs font-semibold'>2 minutes ago</p>
                            <p className='text-xs font-semibold'>03/01/2024</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className='mt-2'>
                    <CardBody >
                        <h2 className='font-bold flex justify-between'>Home <span className='flex'><MdEdit className='text-blue-500 text-lg' /> 
                        <MdDelete className='text-red-600 text-lg' /></span></h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet Earum ullam dolorem, voluptate tempore vero voluptatum corrupti eum dicta omnis placeat labore ipsum voluptatibus facere error quisquam quasi quidem, repellat minima.</p>
                        <div className='mt-4 flex justify-between'>
                            <p className='text-xs font-semibold'>2 minutes ago</p>
                            <p className='text-xs font-semibold'>03/01/2024</p>
                        </div>
                    </CardBody>
                </Card>
                <Card className='mt-2'>
                    <CardBody >
                        <h2 className='font-bold flex justify-between'>Home <span className='flex'><MdEdit className='text-blue-500 text-lg' /> 
                        <MdDelete className='text-red-600 text-lg' /></span></h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet Earum ullam dolorem, voluptate tempore vero voluptatum corrupti eum dicta omnis placeat labore ipsum voluptatibus facere error quisquam quasi quidem, repellat minima.</p>
                        <div className='mt-4 flex justify-between'>
                            <p className='text-xs font-semibold'>2 minutes ago</p>
                            <p className='text-xs font-semibold'>03/01/2024</p>
                        </div>
                    </CardBody>
                </Card>
            </div>
    </ScrollShadow> 
           
            <Pagination className='mt-4 flex justify-center items-center' loop showControls color="success" total={5} initialPage={1} />
            </CardBody>
           </Card>
        </div>
    );
};

export default Leftside;