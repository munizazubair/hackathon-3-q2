// "use client"

// import * as React from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { GetProductData } from "@/sanity/sanity.query"
// import { ProductInterface } from "@/app/(withHeader)/productpage/[id]/page"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// interface ProductFormData {
//     title: string;
//     price: number;
//     priceWithoutDiscount: number;
//     status: string;
//     image: string;
//   }
  
// const data: Payment[] = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     status: "success",
//     email: "Abe45@gmail.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     status: "processing",
//     email: "Monserrat44@gmail.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     status: "success",
//     email: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
// ]

// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// export const columns: ColumnDef<Payment>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Name
//           <ArrowUpDown />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
//   },
//   {
//     accessorKey: "price",
//     header: () => <div className="text-right">Price</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("price"))

//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)

//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
//   {
//     accessorKey: "discount",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Discount Price
//           {/* <ArrowUpDown /> */}
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("dicount")}</div>,
//   },
//   {
//     accessorKey: "actions",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Actions
//           {/* <ArrowUpDown /> */}
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("actions")}</div>,
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]

// export function DataTableDemo() {
//   const [sorting, setSorting] = React.useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   )
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = React.useState({})

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })
//   const [productData, setProductData] = React.useState<ProductInterface[]>([]);
//   const [title, setTitle] = React.useState<string>("");
//   const [price, setPrice] = React.useState<number>(0);
//   const [priceWithoutDiscount, setPriceWithoutDiscount] = React.useState<number>(0);
//   const [status, setStatus] = React.useState<string>("unpublished");
//   const [image, setImage] = React.useState<string>("");
//   const [editingProduct, setEditingProduct] = React.useState<ProductInterface | null>(null);

//   React.useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const response = await fetch('/api/addProduct');
//         const data = await response.json();
//         setProductData(data);
//       } catch (error) {
//         console.error("Error fetching FAQs:", error);
//       } finally {
//       }
//       fetchFAQs();
//     };
//     async function fetchProductData() {
//       try {
//         const data = await GetProductData();
//         setProductData(data);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     }
//     fetchProductData();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const productData: ProductFormData = { title, price, priceWithoutDiscount, status, image };
  
//     try {
//       const method = editingProduct ? 'PUT' : 'POST';
//       const url = `/api/addProduct`;
  
//       const body = editingProduct 
//         ? JSON.stringify({ _id: editingProduct._id, updatedData: productData }) 
//         : JSON.stringify(productData);
  
//       const response = await fetch(url, {
//         method: method,
//         headers: { 'Content-Type': 'application/json' },
//         body: body,
//       });
  
//       if (response.ok) {
//         alert(editingProduct ? 'Product updated successfully' : 'Product added successfully');
        
//         // Clear form fields after submission
//         setTitle('');
//         setPrice(0);
//         setPriceWithoutDiscount(0);
//         setImage('');
//         setStatus('unpublished');
        
//         // Update the product list if editing
//         if (editingProduct) {
//           // Directly update the state with the new product data
//           setProductData((prevProducts) => 
//             prevProducts.map((product) =>
//               product._id === editingProduct._id ? { ...product, ...productData } : product
//             )
//           );
//         }
        
//         setEditingProduct(null);  // Reset the editing mode
//       } else {
//         alert('Failed to save product');
//       }
//     } catch (error) {
//       console.error("Error saving product:", error);
//       alert('Error saving product');
//     }
//   };
  
  
//   const handleEdit = (item: ProductInterface) => {
//     setEditingProduct(item);
//     setTitle(item.title);
//     setPrice(item.price);
//     setPriceWithoutDiscount(item.priceWithoutDiscount);
//     setStatus(item.status);
//     setImage(item.imageURL);  // Ensure image is set
//   };

  
//   const handleDelete = async (id: any) => {
//     try {
//       const response = await fetch('/api/addProduct', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ productId: id }), // Sending faqId for DELETE
//       });

//       if (response.ok) {
//         setProductData(productData.filter((product: any) => product._id !== id));  // Remove deleted FAQ from state
//         alert('Product deleted successfully');
//       } else {
//         alert('Failed to delete Product');
//       }
//     } catch (error) {
//       console.error("Error deleting Product:", error);
//       alert('Error deleting Product');
//     }
//   };


//   return (
//     <div className="w-full">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter emails..."
//           value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
//           onChange={(event) =>
//             table.getColumn("email")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDown />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value) =>
//                       column.toggleVisibility(!!value)
//                     }
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 )
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {productData.map((item) => (
//                 <TableBody>
//                     <TableRow>{item.title}</TableRow>
//                     <TableRow>{item.description}</TableRow>
//                {/* <div>
//                  <div>{item.title}</div>
//                  <div>{item.description}</div>
//                </div> */}
//                </TableBody>
//             ))}
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//       <Card>
//       <CardHeader>
//         <CardTitle>{editingProduct ? "Edit Product" : "Add New Product"}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col space-y-4">
//             <Label htmlFor="title">Title</Label>
//             <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product Title" required />

//             <Label htmlFor="price">Price</Label>
//             <Input id="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Product Price" required />

//             <Label htmlFor="priceWithoutDiscount">Price Without Discount</Label>
//             <Input id="priceWithoutDiscount" type="number" value={priceWithoutDiscount} onChange={(e) => setPriceWithoutDiscount(Number(e.target.value))} placeholder="Price Without Discount" required />

//             <Label htmlFor="status">Status</Label>
//             <Select value={status} onValueChange={(value) => setStatus(value)}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="published">Published</SelectItem>
//                 <SelectItem value="unpublished">Unpublished</SelectItem>
//               </SelectContent>
//             </Select>

//             <Label htmlFor="image">Image URL</Label>
//             <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
//           </div>
//           <Button type="submit" className="mt-4">{editingProduct ? "Update Product" : "Add Product"}</Button>
//         </form>
//       </CardContent>
//     </Card>
//     </div>
//   )
// }
