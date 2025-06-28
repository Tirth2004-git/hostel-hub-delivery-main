
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  const featuredProducts = [
    {
      name: 'Notebook',
      description: 'High-quality notebook for all your notes',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCia2WKg7D4LQzDHl4ohyZKTrqeNJMovYF4UT3R7Kv_hu2EeVHRmK0e3CtACuwpeMpRI5QeYaMFL8tSKSXljjTE5x7lERJbTi220n4WSRxNQn_m4TpuHQT8FcsKGa_u20uLOBj0tscp0qKwg3Wz25eKCKiJ_XFfhazcAf60lUO0HqPvrlvhE7nDwapJDlX6gWLUgpsKHepGBLan0I6VsSOZ5mzl6SfSTcQQnqjOp1Qx9lPyQrE3VsqzKMMBqPqX1dQL2fZOzMUNMjnA'
    },
    {
      name: 'Pen Set',
      description: 'A set of pens for smooth writing',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIBFCXqky42PUR0t_sFK-fcicJhTPVJmg0_MynRlfFcqtJ3CY8pdaE0_8qcgPn04vhLU1mOcJXcKbuGUgToTQld9Nbfrp3eDWmYMiel1Rx_04KhNADJ6Z_r-QzmrrGriDuL6BAsXEhqSLnxDyw5iKnJ4OCBSOFRlbABBc-XsJa5C2G5eW9wQL1wkksWkDF3iB1ibHQMMWrv3w4HqpJti3uEKj8kMvfJ4PB7TiA98snRy0Zl7uDPajksJGLnaO2s0ScBO5QQSYGJzVs'
    },
    {
      name: 'Textbook',
      description: 'Essential textbook for your studies',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTxvlHjPivrZnyYiNf14NgVy1ICzJrZ43egqI9yHYX3NdKoZhFRZs8ovT9T4P_XF6eX8r2dluqETAdB2dYdxmIV4Yy0j8f3_75pih0eroTue63dftCq7N8ajMJdJZ4_ZXVA2MK_UXedUFyr5hx2Dp_hU4dXzwbl-wYBOJmEjA9SgoEoFSWLF_2Je2WM0gyMdSJ6vVj6Wim4ISE7lOi-ayKGq65BiceVTgFFHg1teR3O54fCXFue1KRJR6nu_Q1_LtgbLHmmteRPSLb'
    },
    {
      name: 'Paper Pack',
      description: 'A pack of paper for assignments',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBlsbAz58bLUUBEFbhzlAzbHQtH2kU0GEu1-yNtWkeNkWCqtm1lPHAwVbRHZGWqdPTBDuZOGEAJXffBEE4CQ7xdTlzLL2yeiQlrNwAqJ4_fLTl3XQ2d_znPwb5S8GyZtuwjJr17dKWiUUoN_7fCfw-iDTDdeQC3drq_lQYvPRkyh92_-c04ATKZx0AW4n3NCnmnl32-hk22v3ewoLTGY8L30zvr0P29WGC50uqwF_N0nS51yeMKgybg2Iua5OiLqNYhuPMIat0I7os'
    },
    {
      name: 'Calculator',
      description: 'Scientific calculator for math',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5bt5cGzR5m8k3XTNFEhto50o73QCAQHar7chDSRm6IIxhnI8wKUJK7Ys-AwZiRlV8gzuEpZ0yutcQYFXGFyr5hGqxQXRXKqp_ZYefwuprmr1tRwFjVcPqPlC5bLZe24XFUeyQNCw9vpsqwJaXUtpY28oAshT7Dedzz_-NEN6VVSpn6qdZWsMVTdfjOkDnv55oBartwEGsCWJebBtnIJdRPRtQSpItR6RpRzBDjAmJvvefI4A0wqc4U5jtNf2T22uXLlzcXQn9S_81'
    },
    {
      name: 'Backpack',
      description: 'Durable backpack for carrying essentials',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXZtcLJg3NMnc50BzA9-VC9NvU-w7zc61GHhJBwppDT9fUL7TeKU8LT6rkmzE7WUhozJxfcm6ar48K13lB7foxcn7tHgjFz6W2ReuZE_Od8iinpZbFtIGKHzjtHDpKlwxS4Ux20RmoBZuj5effJ_KxYIQhLpna8-DXC7Oh8H2Xm0tPKsEn7qLQck0p4K6WmMSMtIhTLhfMOnYEWxM42s3GSMULurv55oAE_UJLEOAwPvFqcY_V-MfV4dTds8UVlScEULStAP7iCgzB'
    },
    {
      name: 'Desk Organizer',
      description: 'Keep your desk tidy with this organizer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQDLnFCpTrciix51HI8pyOp1G-mKdZdEZauMU5OH-6-otH7ipzFoo6Crr8K-qn3qj4I_n83ZJRf7KNk3-8mmUmtVadIUFuYJCFYDXsylDEALDuYC8-05jT96fVMTALrU_Vri04YQcvZbNw4i1UW-_qLO3EkWh0BdFvAt9_c1p1sY1_wO4zIZCfxsHST4ZNISTY3SEZC-Egb97IxAyqu0CGcInwuv_XwkQ50zmsCw-4Ckzyb7mN3VGe6kT7OE_k_saioSxPAhnfKd2K'
    },
    {
      name: 'Planner',
      description: 'Stay organized with this planner',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9yosX8vuEesvLD4rPVIenGCSEZX5DJakA8MSswYqtSu8br03d40p2z9A9gI2gvDmCmn6hBzpQ_qMynX3w1RG2VOHdF1MkyJ50kabpI0qnPT3OxDG_rPhD7-jX0VWr4bRPWV0oGEMWZOqxvIafzEOCTLtA5elx2BkJ9Z78Ekdt6KN5Pz0Cjn_YJ4d7zaAyeaTFh1VpQSQwPE-00i0Q2EAzwxWCN-h3T-cYvCypL3o-AR0UtEbGEoRA7UNmAfY0U9Rdsb2DNM1pWEAR'
    }
  ];

  const categories = [
    {
      name: 'Writing Supplies',
      description: 'Pens, pencils, and markers for all your writing needs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5LzUQ7hY1G540-HT5tL5dhudpXWLZ5recOBkXCY5zXHHMAe-kEog8kYkeaBT2-SZiFz43Pu5S0MQ7w2aZEsD6RiCApRtPuE-FgnlweZVVstbaBlo3mylSRnXKW3iiUTLl0JDOdPTgs374NC0FH6-9tAS7vEbInJr1iP_QcRtswpO-tnwXgx0CS3OFHnd6R7O-vmn3QoAkjy5DVTKJElWG-g6BM_yT4hjnbNMw5jN4puXQDJPhPYDMogyxRbIsB5XBQPLorl-7gbFI'
    },
    {
      name: 'Study Essentials',
      description: 'Textbooks, notebooks, and study guides',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpuvPXwuNRUrM8DOTNT6pbCDDU2kAML-v4E7PoCt7AWUne5WeLWOqQdvx-e7dejPOdVvT2rsR56uxFYoK6GKmFlW1Q5wVa7x884RRVbjF0E7Ng700CGCI5vnSq9yflz-aL0FHwcBeevh5izLdKvOXtP2m8wRHyE60j4F4yC285hsY5H52EHcA37NDm1L9sF0o3QNlf1oyJrOlTEpC2oF9FANHUptNRd1mkGcJwzj1NKHtkHuV5o7kfDK5tWGhPCKXTjFNvf--25SSl'
    },
    {
      name: 'Organization',
      description: 'Organizers, planners, and desk accessories',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqiAUPNhxTIHOj4Pelu4uEpjsQsWBmZJIDvg1DThjLBEZ7lrHZeYJmdiVjTDjwfaq-QdFp7XLcE9-LwsXIX_CK2mQH0gs4Ipr26tejBEYv_ObxRILau36_UjIgDD4DgYITEKV1NG7hVyy11hI81LFgIQkabyCrmTlDQZY5xZvszM-Q063MebPNfyu3yZROUH5kcYpAYMOz_KljxeirHeKdLcvF77CL55_K-BES0dQiyo_vyr3iOKUZlgdadnm6k4QerTNYru2HZWLb'
    },
    {
      name: 'Tech Accessories',
      description: 'Headphones, chargers, and laptop sleeves',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsn0eQ5VgeYVFwR3hj-urMG6etBUnQLW6G0DbohCOjNXei2DxRoL7mjGRVvdeSymBD_eeMFUYjkEyiDpC1GI7pSXChDihK6W8vjBq4IlhiRncyQuDl3BXd0snmvnZvfsHViAFTHDcTN974S8tuMhfhRMA7vs8jRkvSFRQmjSRh1jiF0CwHuyR8vFoj-eSx7JVhMf0JYsfo5PzQ79yoCf6UTK_xf3wQY09vyL'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="px-4 sm:px-6 lg:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="p-4">
              <div
                className="flex min-h-[320px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4 sm:p-8"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5WMaEi6Rl-NK2Iu-evNBmMT_kBkj_HOCyxDTWT-RvCd5i1yZE9g7SGUS01nJ_tRGIpioi5vxycrD4N2t1tDAuOzk_pVCRtwM7c1ml26gPJKsN4T2dQvIODqYXpGGZeNSVSS9zX5DxHpxsy566iJWKK60vzPcdSo77QiTK7PH_1KtxfnsEje602xsBTSCOPbfe3BQRl_e6kLqSH9EU4xmpfatNtjzfbwhk0tp9B2jjG2hVCFxvjtC53YNUW8CvytbD095PCrYPYzi2")'
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                    Welcome to Student Stationers - Your one-stop stationery hub
                  </h1>
                  <h2 className="text-white text-sm sm:text-base font-normal leading-normal">
                    Find everything you need for your academic journey.
                  </h2>
                </div>
                <Link to="/shop">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base font-bold">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <h2 className="text-gray-900 text-xl sm:text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
            {featuredProducts.map((product, index) => (
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${product.image}")` }}
                />
                <div>
                  <p className="text-gray-900 text-sm sm:text-base font-medium leading-normal">
                    {product.name}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm font-normal leading-normal">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <h2 className="text-gray-900 text-xl sm:text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">
            Categories
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${category.image}")` }}
                />
                <div>
                  <p className="text-gray-900 text-sm sm:text-base font-medium leading-normal">
                    {category.name}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm font-normal leading-normal">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
