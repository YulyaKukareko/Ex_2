﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Lab_7Entities13 : DbContext
    {
        public Lab_7Entities13()
            : base("name=Lab_7Entities13")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Album> Album { get; set; }
        public virtual DbSet<Images> Images { get; set; }
        public virtual DbSet<UserAlbum> UserAlbum { get; set; }
        public virtual DbSet<UserAlbumPosts> UserAlbumPosts { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<UsersImages> UsersImages { get; set; }
        public virtual DbSet<UsersImagesComments> UsersImagesComments { get; set; }
    }
}
