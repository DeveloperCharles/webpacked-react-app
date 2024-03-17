import React, { useEffect, useState } from 'react'
import { Table } from 'antd'

type Product = {
  id: number,
  title: string,
  brand: string,
  category: string,
  price: number,
  stock: number
}

function products() {
  const [products, setProducts] = useState<Product[]>([])
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 }); // Initialize pagination state
  const getProducts = async () => {
    return await fetch('https://dummyjson.com/products?skip=0&limit=30').then(response => response.json()).then(data => data.products as Product[])
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const _products:Product[] = await getProducts();
        const finalProducts = _products.map(product => {
          return {
            ...product,
            key: product.id
          }
        })
        setProducts(finalProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);
  

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      dataIndex:'stock',
      key:'stock',
    }
  ]

  return (
    <div>
      <h1>products</h1>
      {products.length > 0 && <Table
        columns={columns}
        dataSource={products} 
        pagination={{
          ...pagination,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`,
          pageSizeOptions: ['10', '20', '30'],
          onShowSizeChange: (current, size) => setPagination({ ...pagination, current: 1, pageSize: size }),
          position: ['bottomRight'],
          hideOnSinglePage: false,
          size: 'default',
          simple: false,
        }}
      />}
    </div>
  )
}

export default products
