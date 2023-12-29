import { useMutation, useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { CartItem, ShippingAddress } from '../types/Cart'
import { Order } from '../types/Order'

export const useGetOrderDetailsQuery = (id: string) =>
  useQuery({
    queryKey: ['orders', id],
    queryFn: async () => (await apiClient.get<Order>(`api/orders/${id}`)).data,
  })

export const useCreateOrderMutation = () =>
  useMutation({
    mutationFn: async (order: {
      orderItems: CartItem[]
      shippingAddress: ShippingAddress
      paymentMethod: string
      itemsPrice: number
      shippingPrice: number
      taxPrice: number
      totalPrice: number
    }) => {
      try {
        const response = await apiClient.post<{
          message: string
          order: Order
        }>(`api/orders`, order)

        console.log('Create Order Response:', response)

        return response.data
      } catch (error) {
        console.error('Error in createOrder mutation:', error)
        throw error // Re-throw the error to let React Query handle it
      }
    },
  })
