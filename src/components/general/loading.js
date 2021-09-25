import React from 'react'

function Loading() {
    return (
		<div className="row justify-content-center">
			<div className="col-1 align-self-center">
				<div className="spinner-border text-info" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</div>
    )
}

export default Loading
