import Image from "next/image";
import CoverArt from '../../public/BlackHole.png'

function Banner() {
  return (
    <div>
      <div className="w-screen h-fit">
        <Image
          className="Round"
          src={CoverArt}
          alt="black hole"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
