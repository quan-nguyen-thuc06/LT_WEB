import React from 'react'
import {Form, Button } from 'react-bootstrap'

export default function tintucs(){
    return(
        <div class='container-fluid'>
            <div class='row' style={{marginTop:'5px'}}>
                <div class="col-md-7 col-sm-12">
                    <img class="img-fluid" src={this.state.image0} name ="image0" onClick={this.indexImage}/>
                    <img class="img-fluid" src={this.state.image1} name ="image1" onClick={this.indexImage}/>
                    <img class="img-fluid" src={this.state.image2} name ="image2" onClick={this.indexImage}/>
                </div>
            </div>
        </div>

    )

}