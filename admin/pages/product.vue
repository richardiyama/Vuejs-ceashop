<template>
    <main>
<div class="container-fluid">
<div class="row">

<div class="col-sm-3">

</div>

<div class="col-sm-6">
    <div class="a-spacing-top-medium"></div>
    <div class="a-section">
        <h2 style="text-align: center">Add a new Product</h2>
        <form>
            <!-- Category Dropdown-->
     <div class="a-spacing-top-medium">
         <label>Category</label>
         <select class="a-select-option">
             <option value="1">1</option>
             <option value="2">2</option>
         </select>
     </div>

      <!-- Owner Dropdown-->
     <div class="a-spacing-top-medium">
         <label>Owner</label>
         <select class="a-select-option">
             <option value="1">1</option>
             <option value="2">2</option>
         </select>
     </div>
     <!-- Title Input-->
     <div class="a-spacing-top-medium">
         <label style="margin-bottom:0px">Title</label>
         <input type="text" class="a-input-text" style="width: 100%"/>
     </div>

      <!-- Price Input-->
     <div class="a-spacing-top-medium">
         <label style="margin-bottom:0px">Price</label>
         <input type="number" class="a-input-text" style="width: 100%"/>
     </div>

      <!-- Description textarea-->
     <div class="a-spacing-top-medium">
         <label style="margin-bottom:0px">Description</label>
         <textarea placeholder="Provide details such as a product description" style="width: 100%"></textarea>
     </div>

       <!-- Photo File-->
     <div class="a-spacing-top-medium">
         <label style="margin-bottom:0px">Add Photo</label>
        <div class="a-row a-spacing-top-medium">
            <label class="choosefile-button"></label>
            <i class="fal fa-plus"></i>
            <input type="file"/>
            <p style="margin-top: -70px">name of the Photo</p>
        </div>
     </div>
     <!--Button-->
<hr/>
<div class="a-button-top-large">
    <span class="a-button-register">
        <span class="a-button-inner">
            <span class="a-button-text">Add product </span>
        </span>
    </span>
</div>
        </form>
    </div>
</div>

<div class="col-sm-3">
    
</div>

</div>

</div>


    </main>
</template>

<script>
export default {
    async asyncData({$axios}){
        try {
             let categories = $axios.$get("http://localhost:3000/api/categories");
        let owners = $axios.$get("http://localhost:3000/api/owners");

        const [categoryResponse,ownerResponse] = await Promise.all([
            categories,
            owners
        ]);
   console.log(categoryResponse);
        return{
           categories: categoryResponse.categories,
            owners: ownerResponse.owners
        }
        } catch (err) {
            console.log(err);
        }
       
    }
}
</script>