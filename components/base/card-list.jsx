export default function CardList() {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        {" "}
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className="text-lg font-bold text-slate-700">Joe Smith</div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-xs text-neutral-500">2 hours ago</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">
              Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
            </div>
            <div className="text-sm text-neutral-600">
              Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
              dignissim turpis, non suscipit mauris interdum at. Morbi sed
              gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut
              mollis ipsum consectetur quis. Etiam faucibus est risus, ac
              condimentum mauris consequat nec. Curabitur eget feugiat massa
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
