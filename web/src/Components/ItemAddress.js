export default function ItemAddress (props){
	return (
		<>
			<div class='row col-md-10 mb-2' style={{backgroundColor:'#fff', margin:'auto',borderRadius:'17px'}}>
				<div class='row'>
					<div class="col-md-9 col-sm-9 mt-3 mb-3">
						<p style={{fontWeight:'bold'}}>{props.item.name}</p>
						<small>{props.item.address}</small><br/>
						<small>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
								</svg>
							</span>
							<span class="ms-2">{props.item.phone}</span>
						</small>
					</div>
					<div class="col-md-3 col-sm-3 mb-3" style={{margin:'auto'}}>
					<div class="d-flex justify-content-end">
						<button type="button" class="btn btn-danger">Xóa</button>
						<button type="button" class="btn btn-success ms-2">Chọn</button>
					</div>
					</div>
				</div>
			</div>
		</>
	);
}
