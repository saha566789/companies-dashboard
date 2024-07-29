"use client"


import { Card, CardBody } from '@nextui-org/card';
import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { Pagination } from '@nextui-org/pagination';




const History = () => {


    return (
        <div className='mt-2'>
            <Card className='bg-blue-200'>
                <CardBody>
                    <h2 className='font-bold'>#history</h2>

                    <div>
                        <Card>
                            <CardBody>
                                <Table removeWrapper aria-label="Example static collection table">
                                    <TableHeader>
                                        <TableColumn>ID</TableColumn>
                                        <TableColumn>JOB TITLE</TableColumn>
                                        <TableColumn>CONSULTANT</TableColumn>
                                        <TableColumn>END DATE</TableColumn>
                                        <TableColumn>STATUS</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1">
                                           <TableCell className='text-gray-400 font-medium'>1</TableCell>
                                           <TableCell className='text-yellow-900 font-medium'>Front developer</TableCell>
                                            <TableCell className='text-blue-600 font-medium'>Tony Reichert</TableCell>
                                            <TableCell className='text-red-600 font-medium'>3-04-2024</TableCell>
                                            <TableCell className='text-green-600 font-medium'>Active</TableCell>
                                        </TableRow>
                                        <TableRow key="2">
                                        <TableCell className='text-gray-400 font-medium'>2</TableCell>
                                        <TableCell className='text-yellow-900 font-medium'>UI developer</TableCell>
                                            <TableCell className='text-blue-600 font-medium'>Zoey Lang</TableCell>
                                            <TableCell className='text-red-600 font-medium'>5-04-2024</TableCell>
                                            <TableCell className='text-green-600 font-medium'>Paused</TableCell>
                                        </TableRow>
                                       
                                       
                                    </TableBody>
                                </Table>
                                <Pagination className='mt-2 flex justify-center items-center' loop showControls color="success" total={5} initialPage={1} />
                            </CardBody>
                        </Card>
                    </div>

                </CardBody>
            </Card>

        </div>
    );
};

export default History;