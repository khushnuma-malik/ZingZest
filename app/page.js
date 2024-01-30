"use client"
import React from 'react'
import Link from 'next/link'


const page = () => {
  return (

    <div className='bg-pink-100'>
      <div className='nav1  w-full h-[100%] '>
      <div className='p-10 md:p-20 lg:p-48'>
  <h1 className='text-white mb-5 font-bold text-4xl md:text-6xl lg:text-7xl text-center'>ZingyZest</h1>
  <p className='text-white  md:text-xl lg:text-xl text-center ' >The padding of the div is adjusted
  <br/>
   classes p-4 for small screens, md:p-8 for medium screens,
 

 </p>
</div>


      </div>
      <div >
        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class=" font-bold lg:text-5xl md:text-4xl text-2xl font-medium title-font mb-0 mt-2 text-gray-900">Dishes</h1>
             
            </div>
            <div class="flex flex-wrap -m-4">
     <div class="xl:w-1/3 md:w-1/2 p-4 ">
     <Link href={'/Indian'}> <div class="border border-gray-400 p-6 rounded-lg hover:bg-gray-400 ">
                  <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-4">
                 <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAABQVBMVEX///8AiAD/miT/myP4lR39574AgQABiwCt2bL//v////3/nCcAAIMAAIb///sAAHMAAHwAAH0AAIQAAIwAAFsAAGwAAGYAAEwAAFMAAFgAAFAAAHAAAIr5+v/w8/oAAHfBv8/T0+fn6PQAAEL19f/8+v+ZnMIAAFrv7//Q0e3h4u7Jx+TBwuS+veRYWJk1N4qwsNRPT5I/P412eakhIIZzdq5BQoi6vNdqbqCdnbnh4uaqqsYuL4IUE32cnM7W2ec0M3VCQ5nb3vYSFIASDm6Rj7R3dKDS0dUaG3ipqrtKSICMjarBwtPm5utNTHWMjKw4OpIgHmxoYqOHiLgrLmesrrqioeCem+JXWqltbr2sr92mp+OenKeWk8i4u8CFh8s8PHBbWpBNTorT0vdjZJB1dbUmJoCXmcVdYIEcF2crK495K8mGAAAILElEQVR4nO2ba1saSRaAz14zVekL2ICgfaE7DeFmaCXQIpo2xAtMRKNE3cW4s8SBmcz//wFb1WiycWbzrOcL5PG80goNH+p5PVV1TlUBfyYezFOYdwu+R57CX4j/G7KG4Yu1+cT49w1Zw0DWMNC49hC+WJvn/+x7haxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGMgaBrKGgaxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGMgaBrKGgaxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGMgaBrKGgaxhIGsYyBoG+pYGAoo1FGQNA1nD8BT+Sjwc+BvxcID4/uHiYuLBxDN58Xk36A9ZtFbx2UPTgAs0HrdP/J13uxYdaYt9fiqDjsuwI76FVMS49nUn4BRr30SEmeidAHalWlurVSu2VMYYxdo3kd3Rcosv6un0asJZderjomvNRBLfwA7WnaRimkYykTANVUk464G/cLPWghFuOKqpbzRepmtu7WWiueGYptMKqYv+EUx2TQ7epm4kVb1WgrANW9BpQ6msCFabnhzygHrqfYQ2dzup7BRfZSN+KG7kxbVlW7uN4o6S3HYhTnuJ/0IEmgbhjqq+7mq8wqAjwqot7vfFQGfx7mtjaS8EStvuwZkGR47y5s2ef2iLKXPf0uBA3N8X9gqHVksMdjshhdo9xKDl9hQ9dDvM6gs7/SMNfgSovBXWzgeQDwNd6bkaBdtXcLDrqhLaIskVxoBHItD2GJwccR61GYfCIFSUuk3B9hWcNZKm04b8QDw9tsFPAaQs2PW4feyDZueZ66jJxrybuWhUHWV94wTgbSSmgE0RaC57VqrkGLwtAngHFuSn7xS9PO9mLgZMpmmyOP9oOl1WYNwaV8E6DeGs4a94xRa4WZ9Hx7YmCq2yo7yYLSLNu9XzRgxZTKa3VV0ZWhETU6m3G0CQKe2nSyvutMn2ihC894Qna8seKk6Vg0ZLIFKZdNBUzYllnffFGOalrtl0PUxdiJ9OMwPF564oCfpt2xomk827hctHzcwa93qmkhUj2tFxpwDVbHMtc5m5zF4uX6ZH+7kQWOc4FJNpKmH0PCn50QebXIXUeE131jy5IGQd5ESXTP3j9Vkz+FQdNzf+mepA8OlnW77pjfTVGgeyFgvQoJGYelsD+RKqe+lXF7mrXffD9b/Ku6Pln0a9VBh/dLBVeSmSj3hkm2+j545cyeDWuroO1uHbg7ZbAmik6mv/dsObtbIbHa+1MhMf/Kh9cHJowbqyHk8ej91anHvYdeNNoyCSi/x4pbdZvJicuu6ZnnBeRO7u5KI46S2PxTwBbP+lIeqDR98/IV7H4IMdc2fsxy/9TiuTHQtpSdUwkmdR1FxJ1YsiAkWmZm/r5s6ARrVbA+6qGtze8Eultavq+c2qaRqGoXfPw9GoW7JmbxZGql6Bzzt/j5Y7a0o4yLdPxpncs+XlXC5zXU0awpqZvCn2nmeXl5/l0h8P2vlKuJR2KWGTiNQj0u9izS950dVPow83urpkylj7EFxflEt3wRaoTkTWYLaX5/UMZ9eHgqgBSp16OrvZPZwoItic5lG3mUltFz05rDH2syPSXOqhtwcU7A3zTcMSc2jn47Nps3Mx6bnVpuM4TTc6PbsImq3lHzu2mDiGirFBcyjMBjaRrykyX9sX+ZoPVjMj87Wjm3I5co/XXqfPxL2of3CSL4h87SOjbO2uNhgmppXBIL4RZvaC69TV+xtRG7iyNginoqiS2FvdXnIYO3vk3uLzQhrUdH3kyaf25qcgrkNfNIOMqEPfTTJFCHdFHQoa80ZJXW65UBeVcaNxb6omshGXax4AtZVhkLlMXa68yl1mXrVzYno9GvdBi7KOMfWAindJvOneNJWJbff7BdC6z4vWdFzLXqWu0p1G2g5WymJuzbdtmCwlmrT9LrkNG1dXh2zLkmXTbghBxh+udlfcepOd/gLV9x7XgG3ZjSXH5WQN4tNp0hw7U5yybzHm/+qC9SneN3jWLW5AOedD5Ve5FlkoO0tnLA5NMifnUI2Loiq5sX3A+MkWh/7B3R7VCoOTIsDgxIL+9jtFd+H2cMOjJ96kEsmHYioB5Acat4597mcYpAqw62nWcUkDOw9h0lCGcaRRaXCbRjCm+S1FDWxLZB99l0O89w7wNh+fWhA5iV1UlJbPRF3F6dzCZzivbKtOELUtqy/NHbHP5zzyAwjDzqq6Hc27kYuHGNp6icRvqejQEsG0X5BnijS2Ly52CC1HVXouDWj3iOsqd6ou/VZmEN2dX+NwDuCzQnnDlNIYJWtfExfxELUSqvPL9XMXtoSiPMizkv7p9VBXlVYko46Kgq+Q3yhgGvgN3VCUZODB/iYM4GQI3pquJFWnURJ1F5VS92B3v6sfHdNw6psv06NqbUc5qycM1Vk/mgUj5Ry/g8+WgKzaeCehmIaRSCYNQ1WcnbNQVFqM0fepfsft98xmA34l2GxNnXQio09bk6ASr/fGn6A59H8jY8723Gq1GnnWl1sLxII155Z7i9wLNwksWnvuYPE4xm8ngYXTtqDwWTKyoL4WslEwi69Z2xa1hcTD+YF4OPB34uHAn4iHQ9YQPCFrCMgaBrKGgaxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGMgaBrKGgaxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGMgaBrKGgaxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGMgaBrKGgaxhIGsYyBoGsoaBrGEgaxjIGgayhoGsYSBrGJ7AE+Lh/Ac7OdxOOeS0zAAAAABJRU5ErkJggg== '/>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">indian Dishes</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div> </Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
              <Link href={'/Pakistani'}><div class="border border-gray-400 p-6 rounded-lg hover:bg-gray-400">
              <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-4">
                    <img src='https://img.freepik.com/premium-vector/pakistan-flag-official-colors-proportion-vector-illustration_601298-16984.jpg '/>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Pakistani Dishes</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div> </Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
              <Link href={'/Chinese'}>     <div class="border border-gray-400 p-6 rounded-lg hover:bg-gray-400">
              <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-4">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png'/>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Chinese Dishes</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div> </Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
              <Link href={'/Bangladesh'}>   <div class="border border-gray-400 p-6 rounded-lg hover:bg-gray-400 ">
              <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-4">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/1/17/BD_Flag.png '/>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bangladesh Food</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div> </Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
              <Link href={'/Spainish'}>    <div class="border border-gray-400 p-6 rounded-lg hover:bg-gray-400">
              <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-4">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/6f/Spain_flag_300.png '/>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Spainish food</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div></Link>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
              <Link href={'/Austraila'}>   <div class="border border-gray-400 p-6 rounded-lg hover:bg-gray-400">
              <div class="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-4">
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png '/>
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Austrailia Food</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div></Link>
              </div>
            </div>

          </div>
        </section>




      </div>
    </div>
  )
}

export default page
