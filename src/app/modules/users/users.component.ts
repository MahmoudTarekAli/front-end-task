import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "./services/user.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'personal_id', 'profile_img', 'phone', 'sex', 'address', 'accounts', 'actions'];
  dataSource = new MatTableDataSource<any>();
  pageIndex = 0;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  searchValue: string

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.pageIndex = params['page'];
      this.searchValue = params['search'];
    });
    this.dataSource = new MatTableDataSource(this.activatedRoute.snapshot.data.userData.body);

  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.body);
      this.dataSource.paginator = this.paginator;
      this.paginator.pageIndex = this.pageIndex;
      this.dataSource.filter = this.searchValue;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageIndex = this.pageIndex;
    this.dataSource.filter = this.searchValue;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.router.navigate(['/users'], {
      queryParams: {page: this.pageIndex, search: this.searchValue},
      queryParamsHandling: 'merge'
    });
    this.dataSource.filter = this.searchValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // @ts-ignore
  getPage(e) {
    this.pageIndex = e.pageIndex;
    this.router.navigate(['/users'], {
      queryParams: {page: this.pageIndex, search: this.searchValue},
      queryParamsHandling: 'merge'
    });
  }

  deleteUser(element: any) {
    this.userService.deleteUser(element.id).subscribe(data => {
      if (data.status === 200) {
        this.getUsers()
      }
    }, error => {
      window.alert(error)
    })
  }
}
