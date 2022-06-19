import Anchor from "@/components/ui/anchor";
import PageTitle from "@/components/base/page-title";
import MetaTag from "@/components/base/meta-tag";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
      }}
    >
      <MetaTag title="Home | Frontend Test" />
      <PageTitle name="Home" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 justify-center">
          <div className="max-w-7xl mx-auto justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">
            <div className="mt-8 flex   lg:mt-0 lg:flex-shrink-0 text-center">
              <Anchor
                to="/example"
                name="Goto Example"
                className="inline-flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
