import Link from 'next/link';

function Hero() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-blue-400">soy un heroe bommnito</h1>
      <img
        className="w-96"
        src="https://firebasestorage.googleapis.com/v0/b/img-uploaded.appspot.com/o/images%2F16569047332862616913.jpg?alt=media&token=b08dd2f6-89d6-4d65-b8ec-e13ffa9d7141"
        alt="dog in fire"
      />
      <Link href="/blog">
        <a className="text-blue-200">Posts del Back</a>
      </Link>
    </div>
  );
}

export default Hero;
