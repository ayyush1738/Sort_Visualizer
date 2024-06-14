const Navbar = () => {
    return(
        <div className="bg-blue-800 text-white " style={{height:150}}>
        <div className=" text-center text-4xl mt-4">
            <h1>Array Visualizer</h1>
        </div>
        <div className="flex w-screen mt-4">
            <div className="ml-8 w-1/4" id="newArray">
                <button type="button" className="btn btn-outline-success btn-dark newArray h-20 w-24 hover:bg-green-500 rounded-2xl outline outline-green-600">New Array</button>
            </div>
            <div className="mt-4 flex space-x-4 justify-start w-1/4" id="input">
                <span id="size">Size <br />
                    <input type="range" min="5" max="100" step='1' value='60' />
                </span>
                <span id="speed">Speed <br />
                    <input type="range" min="5" max="100" step="1" value='60' />
                </span>
            </div>
            <div class="col gap-2 d-sm-flex space-x-10 mt-4">
                <button type="button" className="btn btn-outline-primary btn-dark bubbleSort h-14 w-24 hover:bg-green-500 rounded-2xl outline outline-green-600">Bubble Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark insertionSort h-14 w-24 hover:bg-green-500 rounded-2xl outline outline-green-600">Insertion Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark quickSort h-14 w-24 hover:bg-green-500 rounded-2xl outline outline-green-600">Quick Sort</button>
                <button type="button" className="btn btn-outline-primary btn-dark mergeSort h-14 w-24 hover:bg-green-500 rounded-2xl outline outline-green-600">Merge Sort</button>
            </div>
        </div>
        </div>
    );
}

export default Navbar;