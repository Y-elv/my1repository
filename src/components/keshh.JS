const Kesh = () => {
    return ( 
        <><p><img src="my_file" alt="my_file" style="float:left;width:100px;height:100px;"/>Your Profile Picture</p>
        <input type="file" name="my_file" id="my-file"/>
        
        <div id="update"> - Save your Picture</div>
        <center>
            <div id="edit" contenteditable="true" style="text-size:150%"></div>
        </center>
        <input type="button" value="Save changes" onclick="saveEdits()"/></>
     );
}
 
export default Kesh;