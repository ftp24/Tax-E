import React from 'react'

function Loading() {
    return (
		<div className="mt-5 mb-5 container">
		<div className="mt-5 mb-5 row align-items-center justify-content-center">
			<div className="mt-5 mb-5 col-1 align-self-center">
				<div className="mt-5 mb-5 spinner-border text-info" role="status">
					<span className="mt-5 sr-only">Loading...</span>
				</div>
			</div>
		</div>
		</div>
    )
}

export default Loading
