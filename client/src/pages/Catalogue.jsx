import Card from 'components/Card';

function Catalogue() {
  return (
    <main className="flex h-full min-h-[660px] flex-col  bg-secondarySoft sp:px-8">
      <button
        className="mx-auto mt-[10vh] h-12 w-10/12 rounded-lg border-2 border-btnColor bg-transparent px-8 font-outfitL text-lg text-btnColor sp:mx-0 sp:h-14 sp:w-full sp:text-2xl"
        type="button"
      >
        Filter
      </button>
      <div className="mb-10 grid w-full auto-cols-auto grid-cols-2 justify-items-center space-y-4 pt-5 sm:grid-cols-3 md:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
export default Catalogue;
