import React from 'react'

export const ItemListContainer = ({data}) => {
  return (
    
    <section className="section transheader bgcolor">
		<div className="container">
            <div class="row">
				<div className="row">
                <img src="../src/assets/images/logo.png"  alt="" class="img-responsive" />	
					<div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
						<h2>{data}</h2>
						<p className="lead">Gracias.</p>
					</div>
				</div>
            </div>
        </div>
	</section>

  )
}
