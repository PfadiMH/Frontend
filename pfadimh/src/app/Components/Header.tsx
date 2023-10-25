import { Image } from "@nextui-org/image";
const Header = () => {
  return (
    <div>
      <div className="relative border-b-[10px] border-gamboge z-10 bg-align-centre h-[40vh] flex justify-center overflow-hidden items-center">
        <h1 className="pointer-events-none z-10 absolute text-centre font-bold text-6xl text-white">
          OFI
        </h1>
        <Image
          removeWrapper
          isZoomed
          alt="Banner"
          className="z-0 h-full sm:w-full object-cover"
          radius="none"
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x1080:format=png/path/s4c5d6f225e690de2/image/i1eb58ac8cf903588/version/1636059099/image.png"
        />
      </div>
    </div>
  );
};
export default Header;
