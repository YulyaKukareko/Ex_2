import axios from "axios";
import * as constants from "../constants/constantsAlbum";

export function componentWillMount(flagForCheckPage){
    debugger;
    return(dispatch)=>{
        if(!flagForCheckPage) {
            axios.post('searchActiveUserId')
                .then(function (response) {
                    dispatch(searchActiveUserIdFromProfile(response.data))
                });
        }
        else {
            dispatch(searchActiveUserIdFromComments())
        }
    }
}

export function searchActiveUserIdFromProfile(data){
    return{
        type:constants.CHANGE_ACTIVE_USER,
        activeUserId: data,
        flagForCheckPage: false
    }
}

export function searchActiveUserIdFromComments(){
    return{
        type:constants.CHANGE_ACTIVE_USER_FROM_COMMENTS,
        flagForCheckPageCommentsOrProfile: false
    }
}

export function  handleClick(nameImg,value) {
    return (dispatch)=> {
        var obj = {};
        obj.NameImg = nameImg;
        obj.Path = value;
        axios.post('addPhoto', obj);
        const objs = {'original': obj.NameImg, 'thumbnail': obj.NameImg, 'description': obj.Path};
        dispatch(changeState(objs));
    }
}

export function changeState(data){m
    return{
        type:constants.CHANGE_IMAGES,
        images: data
    }
}

export function onChangeDeleteItem(e) {
    return (dispatch)=>{
        dispatch(changeDeleteItem(e.target.value));
    }
}

export function changeDeleteItem(e) {
    return{
        type:constants.CHANGE_DELETE_ITEM,
        deleteItem: e
    }
}

export function onChangeNameImage(e) {
    return (dispatch)=>{
        dispatch(changeNameImage(e.target.value));
    }
}

export function changeNameImage(e) {
    return{
        type:constants.CHANGE_NAME_IMAGE,
        nameImg: e
    }
}

export function onChangePath(e) {
    return (dispatch) =>{
        dispatch(changePath(e.target.value))
    }
}

export function changePath(e) {
    return{
        type:constants.CHANGE_PATH,
        path: e
    }
}

export function loadImages(activeUserId) {
    return (dispatch)=> {
        var obj = {};
        obj.idActiveUers = activeUserId;
        debugger;
        let promise = new Promise((resolve,reject )=> {
            axios.post('searchphoto', obj)
                .then((response) => {
                    debugger;
                    for (var i = 0; i < response.data.length; i += 2) {
                        const obj = {
                            'original': response.data[i],
                            'thumbnail': response.data[i],
                            'description': response.data[i + 1]
                        }
                        dispatch(loadImg(obj));
                    }
                });
        });
    }
}

export  function loadImg(obj) {
    return{
        type:constants.LOAD_IMAGES,
        images: obj
    }
}

export function returnInInitialState(){
    debugger;
    return (dispatch) => {
        dispatch(returnImagesInInitialState());
    }
}

export function returnImagesInInitialState() {
    debugger;
    return{
        type:constants.RETURN_IN_INITIAL_STATE_IMAGE,
        images: [],
        flagForCheckAlbumInPosts: false,
        flagForCheckPageCommentsOrProfile: false
    }
}

export function deleteItemFromArray(array,deleteItem){
    debugger;
    var index = -1;
    return (dispatch)=>{
        for(var j=0; j<array.length;j++){
            if(array[j].description === deleteItem)
                index = j;
        }
        if(index != -1){
            array.splice(index,1);
            dispatch(searchOnValue(array));
        }
        else
            alert("Incorrect data");
    }
}

export function searchOnValue(array){
    return{
        type:constants.DELETE_PHOTO_FROM_IMAGES,
        images: array
    }
}
