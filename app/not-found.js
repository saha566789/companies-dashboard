import React from 'react';
import { Button, Link } from '@nextui-org/react';
import ErrorImg from "../assets/errorimage.gif"
import Image from 'next/image';
const notFound = () => {
  return (
    <div
      className="text-center flex justify-center items-center bg-slate-950"
      style={{ height: "100vh" }}
    >
      <div className=''>
      <Image
          src="/assets/images-removebg-preview.png"
          width={600}
          height={10}
          className="img-fluid inline  h-96"
          alt="gif"
        />
        <h1 className="py-1 text-3xl">404 - Page Not Found</h1>
        <p style={{ width: "40%", margin: "auto" }}>
          Unfortunately, the page you were looking for could not be found. It may
          be temporarily unavailable, moved, or no longer exist. Check the URL
          you entered for any mistakes and try again.
        </p>
        <Link href="/">
          <Button className='bg-orange-600 mt-4'>
            Go to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
