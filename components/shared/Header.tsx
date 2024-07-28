import { Card, CardBody } from '@nextui-org/card';
import { Button } from '@nextui-org/react';
import { TfiWorld } from "react-icons/tfi";
import React from 'react';

const header = () => {
    return (
        <div className="mt-12 flex justify-between">
            <Card className="w-80 h-28 bg-blue-100">
            <CardBody>
                <h1 className='font-extrabold text-2xl text-center'>RCER bangladesh(TRA)</h1>
                <p className='text-blue-500 text-sm flex gap-1 ml-2 mt-4'><TfiWorld  className='mt-1'/>Visit website</p>
            </CardBody>
        </Card>
        <div className='flex gap-4'>
        <Button color="primary">
      Edit
    </Button>
        <Button color="primary">
      Delete
    </Button>
        </div>
        </div>
    );
};

export default header;