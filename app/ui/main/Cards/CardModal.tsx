const CardModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-md">
                {/* Modal content */}
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p className="text-gray-700">Modal content goes here...</p>
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardModal;
