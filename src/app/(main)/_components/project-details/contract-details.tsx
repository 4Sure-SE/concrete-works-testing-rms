export default function ProjectContractDetails({ id }: { id: string }) {
    return (
        <div className="grid w-full grid-cols-2 gap-x-4 p-8">
            <div className="flex w-full flex-col">
                <h5 className="font-medium text-gray-700">Contract ID: {id}</h5>
                <h5 className="mt-4 font-medium text-gray-700">
                    Contract Name: Highways Construction
                </h5>
                <h5 className="mt-4 font-medium text-gray-700">
                    Contractor Name: ABC Infrastructure Ltd.
                </h5>
            </div>
            <div className="flex w-full flex-col">
                <h5 className="font-medium text-gray-700">
                    Limits: 5 km from Main St. to Elm Rd.
                </h5>
                <h5 className="mt-4 font-medium text-gray-700">
                    Location: Springfield, IL
                </h5>
            </div>
        </div>
    );
}
