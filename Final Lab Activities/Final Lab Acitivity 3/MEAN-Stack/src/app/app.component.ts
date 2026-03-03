import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";


  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe(data=>{
      this.books=data;
    })
  }
  ngOnInit(){
    this.refreshBooks();
  }
  addBook(){
    const titleEl = document.getElementById("newBook") as HTMLInputElement;
    const authorEl = document.getElementById("newAuthor") as HTMLInputElement;
    const categoryEl = document.getElementById("newCategory") as HTMLInputElement;
    const descEl = document.getElementById("newDesc") as HTMLInputElement;
    const priceEl = document.getElementById("newPrice") as HTMLInputElement;

    const formData = new FormData();
    formData.append("title", titleEl.value.trim());
    formData.append("author", authorEl.value.trim());
    formData.append("category", categoryEl.value.trim());
    formData.append("description", descEl.value.trim());
    formData.append("price", (priceEl.value || "0").toString());

    this.http.post(this.APIUrl+'AddBook', formData).subscribe({
      next: (data:any) => {
        alert(data);
        // clear inputs
        titleEl.value = "";
        authorEl.value = "";
        categoryEl.value = "";
        descEl.value = "";
        priceEl.value = "";
        this.refreshBooks();
      },
      error: (err) => {
        console.error(err);
        alert("Add failed. Please check if the API server is running.");
      }
    });
  }


  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
}
