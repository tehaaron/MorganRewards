var imageStore = new FS.Store.GridFS("images", {

});

Images = new FS.Collection("images", {
    stores: [imageStore]
});



//Images = new FS.Collection("images", {
//    stores: [new FS.Store.GridFS("imageStore")]
//});

Images.allow({
   download: function() {
       return true;
   },
    fetch: null
});