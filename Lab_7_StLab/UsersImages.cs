//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан по шаблону.
//
//     Изменения, вносимые в этот файл вручную, могут привести к непредвиденной работе приложения.
//     Изменения, вносимые в этот файл вручную, будут перезаписаны при повторном создании кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Lab_7_StLab
{
    using System;
    using System.Collections.Generic;
    
    public partial class UsersImages
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public UsersImages()
        {
            this.UserAlbumPosts = new HashSet<UserAlbumPosts>();
            this.UsersImagesComments = new HashSet<UsersImagesComments>();
        }
    
        public int Id { get; set; }
        public int IdUser { get; set; }
        public int IdImage { get; set; }
        public string Name { get; set; }
    
        public virtual Images Images { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserAlbumPosts> UserAlbumPosts { get; set; }
        public virtual Users Users { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UsersImagesComments> UsersImagesComments { get; set; }
    }
}
