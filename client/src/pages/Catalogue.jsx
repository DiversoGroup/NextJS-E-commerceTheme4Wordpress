import Button from 'components/Button';
import Card from 'components/Card';

function Catalogue() {
  return (
    <main className="flex h-full min-h-[660px] flex-col  bg-secondarySoft px-2 sp:px-8">
      <div className="mt-[9vh] ">
        <Button
          additionalStyle="border-btnColor border-2"
          bgStyle="bg-transparent"
          textColor="text-btnColor"
          center
        >
          Filter
        </Button>
        <div className="mb-10 grid w-full grid-cols-card2 place-content-center gap-y-6 gap-x-[5vw] pt-5 sm:grid-cols-card3 md:grid-cols-4 lg:grid-cols-6">
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
