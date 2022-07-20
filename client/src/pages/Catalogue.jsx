import Button from 'components/Button';
import Card from 'components/Card';

function Catalogue() {
  return (
    <main className="flex h-full min-h-[660px] flex-col bg-secondarySoft  px-5 lg:px-10 sp:px-10">
      <div className="mt-[9vh]">
        <div className="w-full">
          <Button
            additionalStyle="border-btnColor border-2 md:w-[368px]"
            bgStyle="bg-transparent"
            textColor="text-btnColor"
            center
          >
            Filter
          </Button>
        </div>
        <div className="mb-10 grid w-full grid-cols-card2 justify-between gap-x-2 gap-y-[5vh] pt-5 sm:grid-cols-card3  md:grid-cols-cardDesktop2 md:gap-x-4 lg:grid-cols-cardDesktop3 xl:grid-cols-cardDesktop4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
export default Catalogue;
