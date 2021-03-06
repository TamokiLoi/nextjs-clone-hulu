import React from 'react';
import Thumbnail from './Thumbnail.component';

function Results({ results }: any) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
            3xl:flex flex-wrap justify-center">
            {results.map((result: any) => (
                <Thumbnail key={result.id} {...result} />
            ))}
        </div>
    )
}

export default Results