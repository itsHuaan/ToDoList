//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ToDoList.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;

    public partial class Task
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "A Task Name is required")]
        [DisplayName("Task Name")]
        [DataType(DataType.Text)]
        public string Title { get; set; }

        [DisplayName("Task Description")]
        [DataType(DataType.Text)]
        public string Description { get; set; }

        [DisplayName("Completed")]
        public bool IsCompleted { get; set; }

        [DisplayName("Task Created")]
        [DataType(DataType.DateTime)]
        public Nullable<System.DateTime> CreatedAt { get; set; }
    }
}