import { Link, Outlet, useLocation } from "react-router-dom"


import { RiMenu2Line } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { FiSearch, FiChevronDown } from "react-icons/fi"
import { GrNotification } from "react-icons/gr"
import { IoMdCheckmark } from "react-icons/io"
import { RiErrorWarningLine } from "react-icons/ri"
import { useEffect, useState } from "react"

import profileImg from "../assets/v1/profile-img.png"

import ProjectsImg from "../assets/v3/projects.svg"
import OrderInProgress from "../assets/v3/orderinprogress.png"
import AccountSpendImg from "../assets/v3/accountspend.png"
import CostingImg from "../assets/v3/costing.png"
import marginImg from "../assets/v3/margin.png"
import messagingImg from "../assets/v3/messaging.png"
import storageImg from "../assets/v3/storage.png"

import './V1DashboardLayout.css'



const V3DahsboardLayout = () => {

    const [isMenuExpand, setIsMenuExpand] = useState(false)
    const [page, setPage] = useState("Dashboard")
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [projectSubMenu, setProjectSubMenu] = useState(false)

    const location = useLocation()
    const pathname = location.pathname

    useEffect(() => {
        if (pathname.includes("orderinprogress")) {
            setPage("Order In Progress")
        } else if (pathname.includes("accountspend")) {
            setPage("Account Spend")
        } else if (pathname.includes("costing")) {
            setPage("Costing")
        } else if (pathname.includes("margin")) {
            setPage("Margin")
        } else if (pathname.includes("messaging")) {
            setPage("Messaging")
        } else if (pathname.includes("storage")) {
            setPage("Storage")
        } else if (pathname.includes("settings")) {
            setPage("Settings")
        } else if (pathname.includes("dashboard")) {
            setPage("Projects")
        }
    }, [pathname])


    return (
        <>
            <main className="w-full flex bg-[#055F5B] p-4 min-h-screen">
                <nav className={`${isMenuExpand ? "min-w-[160px]" : "w-[70px]"} transition-all flex flex-col justify-between`}>
                    <div>
                        <div className="text-center text-white mb-8"> <Link to="" className={isMenuExpand ? "text-lg font-semibold" : "text-sm"}>Lexicon Promo</Link> </div>
                        <Link to="/v3/dashboard">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Projects" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.25 4C5.05109 4 4.86032 4.07902 4.71967 4.21967C4.57902 4.36032 4.5 4.55109 4.5 4.75V12.25C4.5 12.4489 4.57902 12.6397 4.71967 12.7803C4.86032 12.921 5.05109 13 5.25 13C5.44891 13 5.63968 12.921 5.78033 12.7803C5.92098 12.6397 6 12.4489 6 12.25V4.75C6 4.55109 5.92098 4.36032 5.78033 4.21967C5.63968 4.07902 5.44891 4 5.25 4ZM10 4C9.80109 4 9.61032 4.07902 9.46967 4.21967C9.32902 4.36032 9.25 4.55109 9.25 4.75V9.25C9.25 9.44891 9.32902 9.63968 9.46967 9.78033C9.61032 9.92098 9.80109 10 10 10C10.1989 10 10.3897 9.92098 10.5303 9.78033C10.671 9.63968 10.75 9.44891 10.75 9.25V4.75C10.75 4.55109 10.671 4.36032 10.5303 4.21967C10.3897 4.07902 10.1989 4 10 4ZM14 4.75C14 4.55109 14.079 4.36032 14.2197 4.21967C14.3603 4.07902 14.5511 4 14.75 4C14.9489 4 15.1397 4.07902 15.2803 4.21967C15.421 4.36032 15.5 4.55109 15.5 4.75V14.25C15.5 14.4489 15.421 14.6397 15.2803 14.7803C15.1397 14.921 14.9489 15 14.75 15C14.5511 15 14.3603 14.921 14.2197 14.7803C14.079 14.6397 14 14.4489 14 14.25V4.75Z" fill={page === "Projects" ? "#055F5B" : "#FFFFFF"} />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 0C1.28587 0 0.840752 0.184375 0.512563 0.512563C0.184375 0.840752 0 1.28587 0 1.75V18.25C0 19.216 0.784 20 1.75 20H18.25C18.7141 20 19.1592 19.8156 19.4874 19.4874C19.8156 19.1592 20 18.7141 20 18.25V1.75C20 1.28587 19.8156 0.840752 19.4874 0.512563C19.1592 0.184375 18.7141 0 18.25 0H1.75ZM1.5 1.75C1.5 1.6837 1.52634 1.62011 1.57322 1.57322C1.62011 1.52634 1.6837 1.5 1.75 1.5H18.25C18.3163 1.5 18.3799 1.52634 18.4268 1.57322C18.4737 1.62011 18.5 1.6837 18.5 1.75V18.25C18.5 18.3163 18.4737 18.3799 18.4268 18.4268C18.3799 18.4737 18.3163 18.5 18.25 18.5H1.75C1.6837 18.5 1.62011 18.4737 1.57322 18.4268C1.52634 18.3799 1.5 18.3163 1.5 18.25V1.75Z" fill={page === "Projects" ? "#055F5B" : "#FFFFFF"} />
                                </svg>
                                {
                                    isMenuExpand && <span className="text-sm">Projects</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v3/dashboard/orderinprogress">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Order In Progress" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="14" height="18" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 14.4286H6C5.46957 14.4286 4.96086 14.6543 4.58579 15.0562C4.21071 15.4581 4 16.0031 4 16.5714V18H5.33333V16.5714C5.33333 16.382 5.40357 16.2003 5.5286 16.0664C5.65362 15.9324 5.82319 15.8571 6 15.8571H10C10.1768 15.8571 10.3464 15.9324 10.4714 16.0664C10.5964 16.2003 10.6667 16.382 10.6667 16.5714V18H12V16.5714C12 16.0031 11.7893 15.4581 11.4142 15.0562C11.0391 14.6543 10.5304 14.4286 10 14.4286ZM8 13.7143C8.52742 13.7143 9.04299 13.5467 9.48152 13.2328C9.92005 12.9188 10.2618 12.4726 10.4637 11.9505C10.6655 11.4285 10.7183 10.854 10.6154 10.2997C10.5125 9.74551 10.2586 9.23642 9.88562 8.83684C9.51268 8.43726 9.03752 8.16514 8.52024 8.0549C8.00296 7.94466 7.46678 8.00124 6.97951 8.21749C6.49224 8.43374 6.07577 8.79995 5.78275 9.2698C5.48973 9.73966 5.33333 10.2921 5.33333 10.8571C5.33333 11.6149 5.61428 12.3416 6.11438 12.8774C6.61448 13.4133 7.29276 13.7143 8 13.7143ZM8 9.42857C8.26371 9.42857 8.5215 9.51236 8.74076 9.66933C8.96003 9.8263 9.13092 10.0494 9.23184 10.3105C9.33276 10.5715 9.35916 10.8587 9.30771 11.1358C9.25627 11.413 9.12928 11.6675 8.94281 11.8673C8.75634 12.0671 8.51876 12.2031 8.26012 12.2583C8.00148 12.3134 7.73339 12.2851 7.48976 12.177C7.24612 12.0688 7.03788 11.8857 6.89137 11.6508C6.74487 11.4159 6.66667 11.1397 6.66667 10.8571C6.66667 10.4783 6.80714 10.1149 7.05719 9.84699C7.30724 9.57908 7.64638 9.42857 8 9.42857Z" fill={page === "Order In Progress" ? "#055F5B" : "#FFFFFF"} />
                                    <path d="M14.5455 2.25H12.3636V1.5C12.3636 1.10218 12.2104 0.720644 11.9376 0.43934C11.6648 0.158035 11.2949 0 10.9091 0H5.09091C4.70514 0 4.33517 0.158035 4.06239 0.43934C3.78961 0.720644 3.63636 1.10218 3.63636 1.5V2.25H1.45455C1.06878 2.25 0.698807 2.40804 0.426026 2.68934C0.153246 2.97064 0 3.35218 0 3.75V19.5C0 19.8978 0.153246 20.2794 0.426026 20.5607C0.698807 20.842 1.06878 21 1.45455 21H14.5455C14.9312 21 15.3012 20.842 15.574 20.5607C15.8468 20.2794 16 19.8978 16 19.5V3.75C16 3.35218 15.8468 2.97064 15.574 2.68934C15.3012 2.40804 14.9312 2.25 14.5455 2.25ZM5.09091 1.5H10.9091V4.5H5.09091V1.5ZM14.5455 19.5H1.45455V3.75H3.63636V6H12.3636V3.75H14.5455V19.5Z" fill={page === "Order In Progress" ? "#055F5B" : "#FFFFFF"} />
                                </svg>

                                {
                                    isMenuExpand && <span className="text-sm">Order in progress</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v3/dashboard/accountspend">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Account Spend" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.22458 12.9051C7.91528 12.6412 7.35344 12.6446 6.94822 12.9071C6.85087 12.9702 6.70537 12.9692 6.63029 12.9044C6.55593 12.841 6.57785 12.7359 6.6752 12.6731C6.77327 12.6093 6.91229 12.6093 6.99025 12.6762C7.17346 12.5554 7.35523 12.434 7.53665 12.3119C7.28087 12.0918 6.86811 12.0531 6.50708 12.181C6.45571 12.1365 6.40434 12.0928 6.35261 12.0477C6.18879 12.1552 6.02426 12.2617 5.85938 12.3675C5.91362 12.414 5.96858 12.4611 6.0239 12.5076C5.82956 12.7501 5.83064 13.0452 6.06953 13.2494C6.2028 13.3637 6.3817 13.4312 6.58072 13.4508C6.84655 13.478 7.14149 13.4183 7.3714 13.2687C7.46911 13.206 7.60849 13.2059 7.68321 13.2701C7.75829 13.3345 7.74249 13.44 7.64478 13.5034C7.54742 13.5668 7.40157 13.5655 7.32649 13.5021C7.1422 13.6191 6.95684 13.7354 6.77004 13.8504C7.00713 14.0532 7.41019 14.1048 7.76332 13.9986C7.82727 14.0532 7.89013 14.1085 7.95444 14.1628C8.12004 14.0573 8.28421 13.9515 8.44767 13.8439C8.38558 13.7922 8.32427 13.7396 8.26374 13.6862C8.48 13.4346 8.47066 13.1174 8.22458 12.9051ZM14.444 6.95085C14.6779 6.95085 14.9225 6.84604 15.096 6.6483C15.17 6.56452 15.2897 6.54858 15.3644 6.61269C15.4398 6.67679 15.4434 6.7989 15.3698 6.88267C15.2958 6.96679 15.17 6.98239 15.0953 6.91862C14.9552 7.07498 14.814 7.22999 14.6721 7.38398C14.9089 7.58714 15.2649 7.59698 15.5512 7.4335L15.7427 7.59732C15.8684 7.45724 15.9923 7.31682 16.1152 7.17504L15.9316 7.018C16.0757 6.70528 16.0153 6.34474 15.77 6.13343C15.4599 5.86887 14.9786 5.9401 14.6732 6.28606C14.5992 6.37017 14.4735 6.38578 14.3988 6.32201C14.3237 6.25757 14.3266 6.13546 14.3995 6.05169C14.4746 5.96825 14.5935 5.95129 14.6711 6.01743C14.8094 5.85937 14.9462 5.69928 15.0809 5.53885C14.8245 5.31907 14.4649 5.32314 14.1753 5.51206L14.0198 5.3791C13.8973 5.52088 13.7726 5.66163 13.6472 5.80138C13.7022 5.84818 13.7572 5.89567 13.8118 5.94179C13.6842 6.24197 13.7317 6.57843 13.9713 6.78261C14.1049 6.8976 14.2691 6.95356 14.444 6.95085Z" fill={page === "Account Spend" ? "#055F5B" : "#FFFFFF"} />
                                    <path d="M20.1936 10.3926C20.4717 10.055 20.7406 9.71003 21 9.35795C20.8911 8.48575 20.7718 7.60445 20.6409 6.7172L20.5958 6.6766L20.7606 6.4351L20.3476 6.0599C18.306 4.20665 16.2652 2.35375 14.2236 0.5012L13.6717 0L13.2524 0.61495C12.538 1.65784 11.7661 2.66015 10.9403 3.61725C10.9854 3.42545 11.0348 3.2277 11.0887 3.02225C11.3095 2.184 11.0509 1.6149 10.7947 1.28555C10.3176 0.6713 9.41465 0.3325 8.2509 0.3325C4.9511 0.3325 0.1771 2.9274 0.1771 7.61915C0.1771 8.26315 0.6062 8.71325 1.2201 8.71325C1.67335 8.71325 2.19695 8.45985 2.78495 7.9576C2.84025 8.14765 2.92355 8.3272 3.04535 8.4798C3.27845 8.7724 3.62215 8.93375 4.01345 8.93375C4.1013 8.93375 4.1916 8.92605 4.28435 8.90995C4.326 9.1119 4.4023 9.31175 4.5241 9.48605C3.38597 10.3064 2.203 11.0626 0.9807 11.7513L0.20405 12.187L0.8239 12.7498C0.6972 12.8282 0.57015 12.9069 0.4438 12.9833C0.3038 13.6301 0.15575 14.2684 0 14.8953C2.24175 16.9309 4.48315 18.9648 6.72455 21C8.67605 19.9384 10.564 18.7639 12.3788 17.4825C12.3795 17.4835 12.3795 17.4849 12.3802 17.4856C12.5489 17.7786 12.824 17.9788 13.2002 18.0856C12.5489 18.8377 12.3147 19.482 12.5037 20.0081C12.6546 20.427 13.0428 20.6773 13.5426 20.6773C18.2626 20.6773 20.8729 15.932 20.8729 12.6518C20.8729 11.8695 20.7172 11.1955 20.4225 10.703C20.3555 10.593 20.2789 10.4891 20.1936 10.3926ZM10.6841 4.87935C11.8115 3.6456 12.8534 2.34535 13.7872 0.97545C15.8287 2.82835 17.8699 4.6809 19.9111 6.5345C19.0639 7.77154 18.1382 8.953 17.1399 10.0716C16.8165 10.1398 16.5109 10.199 16.2309 10.2445C17.1052 9.3023 17.9336 8.32405 18.6942 7.2989L18.4901 7.11375C18.2644 6.909 18.2318 6.54255 18.4107 6.29265C18.4646 6.21635 18.5188 6.1411 18.5728 6.0655C17.2116 4.8307 15.8508 3.59485 14.4907 2.36005L14.3286 2.5872C14.1494 2.8364 13.8159 2.87105 13.5912 2.6663L13.3868 2.48185C12.5188 3.65155 11.5672 4.76385 10.5528 5.82505C10.5833 5.54015 10.6257 5.2262 10.6841 4.87935ZM13.1498 8.3104C12.4355 7.6615 11.4352 7.51485 10.5403 7.80955C10.5133 7.6335 10.4745 7.26425 10.4923 6.68325C11.56 5.60956 12.5584 4.46906 13.4813 3.26865C13.8289 3.4489 14.2422 3.40865 14.5474 3.15945L17.8647 6.1705C17.7086 6.5548 17.7464 7.0056 17.9718 7.3458C17.1668 8.39685 16.2932 9.3996 15.3685 10.361C14.9806 10.4043 14.5908 10.427 14.2006 10.4293C14.0889 10.4293 13.9902 10.4265 13.8981 10.4226C14.0238 9.66945 13.7658 8.86935 13.1498 8.3104ZM4.0887 8.28345C4.0642 8.28555 4.0369 8.2908 4.0138 8.2908C3.23155 8.2908 3.3082 7.16975 3.39115 6.6269C3.8227 6.1971 4.2287 5.7484 4.65255 5.3242C5.09985 4.8685 5.5699 4.4373 6.09875 4.0936C6.62725 3.7527 7.2275 3.51085 7.87815 3.45065C7.2282 3.38345 6.54885 3.55285 5.9696 3.87765C5.383 4.1965 4.88215 4.6382 4.42155 5.0995C3.9641 5.5657 3.54445 6.0585 3.12165 6.54325C2.6957 7.0217 2.2743 7.5019 1.76015 7.8974C1.5442 8.0157 1.3629 8.06995 1.21975 8.06995C0.959 8.06995 0.8232 7.89425 0.8232 7.6188C0.8232 3.23085 5.38265 0.9751 8.2502 0.9751C9.7552 0.9751 10.7947 1.5974 10.4615 2.8595C9.4962 6.5268 9.94 8.10845 9.94 8.10845C9.562 8.8137 8.8333 9.04295 8.8333 9.04295C8.4362 8.93587 8.02658 8.88232 7.6153 8.8837C6.7914 8.8837 6.20865 9.0881 6.20865 9.0881C5.90065 9.2624 5.66265 9.33275 5.4789 9.33275C4.8139 9.33275 4.8643 8.40595 4.9014 8.085C4.98925 8.0437 5.07465 7.9989 5.1569 7.9506C5.4866 7.7609 5.7778 7.5229 6.062 7.2898C6.3427 7.0525 6.6157 6.81555 6.9048 6.6073C7.19495 6.4022 7.50715 6.2314 7.87745 6.1628C7.78381 6.14614 7.68861 6.13991 7.5936 6.14425C7.308 6.1572 7.02135 6.258 6.7718 6.39345C6.43195 6.573 6.1383 6.8103 5.8534 7.04375C5.57235 7.2828 5.30005 7.5222 5.01655 7.74235C4.7341 7.95935 4.43625 8.15185 4.0887 8.28345ZM11.1737 15.4612C9.97077 16.3356 8.71837 17.1398 7.4228 17.8699C5.3816 16.0163 3.34075 14.1648 1.2992 12.3109C2.59766 11.5793 3.85275 10.7733 5.0582 9.89695C5.18945 9.9456 5.3298 9.9764 5.47925 9.9764C5.63255 9.9764 5.7932 9.9498 5.9626 9.898C4.99479 10.6295 3.99215 11.3137 2.9582 11.9483C3.0261 12.0103 3.0947 12.0722 3.16225 12.1345C3.38695 12.3385 3.3495 12.6406 3.0751 12.8026C2.9911 12.8516 2.9078 12.901 2.8245 12.9493L6.9069 16.6555C6.9909 16.6065 7.07385 16.5581 7.1575 16.5077C7.43225 16.3461 7.8365 16.3762 8.06155 16.5802L8.2656 16.7664C9.33087 16.1115 10.3629 15.4039 11.3579 14.6465C11.2248 14.9415 11.1639 15.2138 11.1737 15.4612ZM11.5913 13.783C10.5418 14.6154 9.44895 15.3918 8.3174 16.1087C7.9422 15.9047 7.4452 15.8707 7.02345 16.0128L3.7058 13.0018C3.9795 12.7249 4.02395 12.349 3.8262 12.0333C5.03628 11.2678 6.20234 10.4347 7.31885 9.5382C7.41335 9.53155 7.51135 9.527 7.61565 9.527C7.96921 9.52579 8.32136 9.57157 8.66285 9.66315L8.7227 9.6796C8.5505 10.4041 8.75665 11.1678 9.3793 11.733C9.9512 12.2517 10.7516 12.4897 11.528 12.4296C11.6403 12.943 11.634 13.4183 11.5913 13.783ZM13.5422 20.0343C13.1121 20.0343 12.9279 19.7067 13.2667 19.097C13.664 18.5892 14.1453 18.1713 14.6244 17.7502C15.1119 17.3302 15.6075 16.9123 16.0769 16.458C16.5403 16.0002 16.9851 15.5029 17.3057 14.9194C17.6323 14.3437 17.8031 13.6682 17.7355 13.0221C17.6747 13.6689 17.4321 14.266 17.0888 14.7917C16.743 15.317 16.3089 15.7843 15.8508 16.2291C15.4241 16.6498 14.973 17.0534 14.5411 17.4822C14.3745 17.5074 14.1547 17.5318 13.9286 17.5318C13.3921 17.5318 12.8258 17.3922 12.8716 16.7955C13.0039 16.4468 13.1989 16.1487 13.418 15.8655C13.6395 15.5838 13.8803 15.3132 14.1208 15.0339C14.356 14.7504 14.5947 14.4585 14.7749 14.1211C14.9562 13.7903 15.0762 13.3941 15.0069 13.0221C14.9383 13.3903 14.7665 13.7008 14.5604 13.9892C14.3511 14.2765 14.1127 14.5481 13.8733 14.8274C13.6391 15.1102 13.3994 15.3997 13.209 15.7273C13.1599 15.8096 13.115 15.8943 13.0742 15.981C12.9671 15.9931 12.8594 15.9994 12.7515 15.9999C12.2048 15.9999 11.411 15.8252 12.0648 14.6811C12.0648 14.6811 12.4954 13.4677 12.1104 12.0722C12.1104 12.0722 12.3406 11.3477 13.0497 10.9718C13.0497 10.9718 13.4148 11.073 14.2006 11.073C15.0553 11.073 16.408 10.9532 18.3305 10.4531C18.4777 10.4134 18.6293 10.3926 18.7817 10.3911C21.8575 10.3911 19.9804 20.0343 13.5422 20.0343Z" fill={page === "Account Spend" ? "#055F5B" : "#FFFFFF"} />
                                </svg>

                                {
                                    isMenuExpand && <span className="text-sm">Account Spend</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v3/dashboard/costing">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Costing" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="15" height="18" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.20392 13.1219H9.25408C10.3291 13.1505 11.1891 14.0249 11.1891 15.0999C11.1891 16.0172 10.5656 16.784 9.71992 17.0134V17.816C9.71992 18.1027 9.49058 18.332 9.20392 18.332C8.91725 18.332 8.68792 18.1027 8.68792 17.816V17.0134C8.26682 16.9001 7.89474 16.6514 7.62918 16.3055C7.36363 15.9596 7.21938 15.5359 7.21875 15.0999C7.21875 14.8132 7.44808 14.5839 7.73475 14.5839C8.02142 14.5839 8.25075 14.8132 8.25075 15.0999C8.25075 15.6302 8.67358 16.053 9.19675 16.053C9.71992 16.053 10.1499 15.623 10.1499 15.0999C10.1499 14.5767 9.71992 14.1467 9.19675 14.1467H9.14658C8.63103 14.1327 8.14124 13.9183 7.78126 13.5489C7.42129 13.1796 7.21949 12.6844 7.21875 12.1687C7.21875 11.2514 7.84225 10.4845 8.68792 10.2552V9.45252C8.68792 9.16586 8.91725 8.93652 9.20392 8.93652C9.49058 8.93652 9.71992 9.16586 9.71992 9.45252V10.2552C10.5656 10.4845 11.1891 11.2514 11.1891 12.1687C11.1891 12.4554 10.9597 12.6847 10.6731 12.6847C10.3864 12.6847 10.1571 12.4554 10.1571 12.1687C10.1571 11.6455 9.72708 11.2155 9.20392 11.2155C8.68075 11.2155 8.25075 11.6455 8.25075 12.1687C8.25075 12.6919 8.68075 13.1219 9.20392 13.1219Z" fill={page === "Costing" ? "#055F5B" : "#FFFFFF"} />
                                    <path d="M5.39793 2.91327L7.39457 5.2496L7.17885 5.49041C3.06948 6.41204 0 10.0821 0 14.4695C0 18.3266 3.1304 21.457 6.9875 21.457H11.4093C15.2664 21.457 18.3968 18.3273 18.3968 14.4702C18.404 10.0821 15.3345 6.41204 11.2252 5.49041C11.2419 5.33896 11.2145 5.18592 11.1463 5.04965L12.8448 3.10534L12.9545 2.9362C13.0825 2.65694 13.1153 2.34335 13.0477 2.04365C12.9801 1.74396 12.816 1.47476 12.5805 1.27746C12.345 1.08016 12.0512 0.965683 11.7443 0.951638C11.4374 0.937592 11.1344 1.02476 10.8819 1.19972L10.2777 0.483055C10.1422 0.331394 9.97623 0.209993 9.79065 0.126762C9.60507 0.0435318 9.40404 0.000340081 9.20065 2.0002e-06C8.99726 -0.00033608 8.79608 0.0421871 8.61023 0.1248C8.42437 0.207413 8.25801 0.328262 8.12198 0.479471L7.48917 1.1861C7.23729 1.0075 6.93359 0.916862 6.62503 0.928211C6.31646 0.939561 6.02024 1.05226 5.78216 1.24889C5.54409 1.44552 5.37744 1.71511 5.30799 2.01596C5.23853 2.31682 5.27014 2.63218 5.39793 2.91327ZM8.12055 3.90585L6.90508 2.50119C7.18746 2.63725 7.50698 2.67589 7.81365 2.61105C8.12032 2.54622 8.39686 2.38157 8.6 2.14285L9.17333 1.39895L9.80973 2.15289C10.0082 2.38364 10.2758 2.5441 10.5729 2.61035C10.8699 2.6766 11.1804 2.6451 11.4581 2.52054L10.2483 3.90585H8.12055ZM1.43333 14.4695C1.43333 10.1781 4.9106 6.70086 9.202 6.70086C13.4934 6.70086 16.9707 10.1781 16.9635 14.4681V14.4695C16.9629 15.9424 16.3776 17.3548 15.3361 18.3963C14.2946 19.4378 12.8822 20.0231 11.4093 20.0237H6.9875C5.51462 20.0231 4.10223 19.4378 3.06074 18.3963C2.01926 17.3548 1.4339 15.9424 1.43333 14.4695Z" fill={page === "Costing" ? "#055F5B" : "#FFFFFF"} />
                                </svg>

                                {
                                    isMenuExpand && <span className="text-sm">Costing</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v3/dashboard/margin">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Margin" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.675 7.875C9.225 7.7625 8.775 7.5375 8.4375 7.2C8.1 7.0875 7.9875 6.75 7.9875 6.525C7.9875 6.3 8.1 5.9625 8.325 5.85C8.6625 5.625 9 5.4 9.3375 5.5125C10.0125 5.5125 10.575 5.85 10.9125 6.3L11.925 4.95C11.5875 4.6125 11.25 4.3875 10.9125 4.1625C10.575 3.9375 10.125 3.825 9.675 3.825V2.25H8.325V3.825C7.7625 3.9375 7.2 4.275 6.75 4.725C6.3 5.2875 5.9625 5.9625 6.075 6.6375C6.075 7.3125 6.3 7.9875 6.75 8.4375C7.3125 9 8.1 9.3375 8.775 9.675C9.1125 9.7875 9.5625 10.0125 9.9 10.2375C10.125 10.4625 10.2375 10.8 10.2375 11.1375C10.2375 11.475 10.125 11.8125 9.9 12.15C9.5625 12.4875 9.1125 12.6 8.775 12.6C8.325 12.6 7.7625 12.4875 7.425 12.15C7.0875 11.925 6.75 11.5875 6.525 11.25L5.4 12.4875C5.7375 12.9375 6.075 13.275 6.525 13.6125C7.0875 13.95 7.7625 14.2875 8.4375 14.2875V15.75H9.675V14.0625C10.35 13.95 10.9125 13.6125 11.3625 13.1625C11.925 12.6 12.2625 11.7 12.2625 10.9125C12.2625 10.2375 12.0375 9.45 11.475 9C10.9125 8.4375 10.35 8.1 9.675 7.875ZM9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM9 16.7625C4.725 16.7625 1.2375 13.275 1.2375 9C1.2375 4.725 4.725 1.2375 9 1.2375C13.275 1.2375 16.7625 4.725 16.7625 9C16.7625 13.275 13.275 16.7625 9 16.7625Z" fill={page === "Margin" ? "#055F5B" : "#FFFFFF"} />
                                </svg>

                                {
                                    isMenuExpand && <span className="text-sm">Margin</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v3/dashboard/messaging">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Messaging" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="15" height="17" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3 0H5.7C2.55645 0 0 2.73905 0 6.10714V19.3393C0 19.6092 0.100089 19.8681 0.278249 20.059C0.456408 20.2499 0.698044 20.3571 0.95 20.3571H13.3C16.4436 20.3571 19 17.6181 19 14.25V6.10714C19 2.73905 16.4436 0 13.3 0ZM17.1 14.25C17.1 16.4954 15.3957 18.3214 13.3 18.3214H1.9V6.10714C1.9 3.86175 3.6043 2.03571 5.7 2.03571H13.3C15.3957 2.03571 17.1 3.86175 17.1 6.10714V14.25Z" fill={page === "Messaging" ? "#055F5B" : "#FFFFFF"} />
                                    <path d="M4.07031 6.78613H14.9275V9.04804H4.07031V6.78613ZM4.07031 11.3099H11.6703V13.5718H4.07031V11.3099Z" fill={page === "Messaging" ? "#055F5B" : "#FFFFFF"} />
                                </svg>

                                {
                                    isMenuExpand && <span className="text-sm">Messaging</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <Link to="/v3/dashboard/storage">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Storage" && "active"}`}>
                                <div className="top-border"></div>
                                <svg width="15" height="16" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2.47901C16.898 0.526717 11.6337 0 8.5 0C5.36633 0 0 0.532443 0 2.53053V15.4637C0 17.4618 5.34367 18 8.5 18C11.6563 18 17 17.4676 17 15.4637V2.47901ZM15.8667 6.80725C15.6797 7.29962 12.9993 8.20992 8.5 8.20992C6.3955 8.26419 4.29472 8.00177 2.26667 7.4313V8.62214C4.30486 9.13483 6.39975 9.38112 8.5 9.35496C10.7667 9.35496 14.127 9.08015 15.8667 8.20992V11.1698C15.6797 11.6622 12.9993 12.5725 8.5 12.5725C6.39437 12.6193 4.29357 12.3492 2.26667 11.771V12.9618C4.30486 13.4745 6.39975 13.7208 8.5 13.6947C10.7667 13.6947 14.127 13.4198 15.8667 12.5496V15.4695C15.6683 15.9618 12.988 16.8721 8.5 16.8721C4.012 16.8721 1.30333 15.9389 1.13333 15.4637V2.55344C1.30333 2.08397 3.96667 1.14504 8.5 1.14504C12.903 1.14504 15.5607 2.02099 15.8667 2.50191C15.572 3 12.9143 3.87023 8.5 3.87023C6.39556 3.92322 4.29496 3.66083 2.26667 3.0916V4.28817C4.30534 4.79764 6.40006 5.04198 8.5 5.01527C10.7667 5.01527 14.127 4.74046 15.8667 3.87023V6.80725Z" fill={page === "Storage" ? "#055F5B" : "#FFFFFF"} />
                                </svg>

                                {
                                    isMenuExpand && <span className="text-sm">Storage</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/v2/dashboard/settings">
                            <div className={`${isMenuExpand ? "justify-start" : "justify-center"} rounded-l-3xl dashboard-menu-item ${page === "Settings" && "active"}`} style={{ marginBottom: "5px" }}>
                                <div className="top-border"></div>
                                <IoSettingsOutline className="text-xl" />
                                {
                                    isMenuExpand && <span className="text-sm">Settings</span>
                                }
                                <div className="bottom-border"></div>
                            </div>
                        </Link>
                        <div className="pl-3">
                            <button className="outline-none border-none bg-transparent" onClick={() => setIsMenuExpand(!isMenuExpand)}>
                                <RiMenu2Line className="text-3xl text-white" />
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="flex-1 bg-[#FFFFFF] p-5 rounded-3xl">
                    <header className="flex justify-between items-center">
                        <div className="relative">
                            <div className="flex gap-4 items-center">
                                <button className="outline-none border-none bg-transparent" onClick={() => setIsMenuExpand(!isMenuExpand)}>
                                    <RiMenu2Line className="text-3xl" />
                                </button>
                                <h2 className="text-xl font-bold cursor-pointer" onClick={() => page === "Projects" ? setProjectSubMenu(!projectSubMenu) : ""}>{page}</h2>
                                {
                                    page === "Projects" && <FiChevronDown className="text-lg cursor-pointer" onClick={() => setProjectSubMenu(!projectSubMenu)} />
                                }
                            </div>
                            {
                                projectSubMenu && <div className="absolute top-12 left-0 bg-white p-6 w-[250px] rounded-lg shadow-lg z-[999]">
                                    <div>
                                        <Link to="" className="flex gap-4 items-center">
                                            <span className="text-md">Employee project</span>
                                        </Link>
                                    </div>
                                    <hr className="my-3 w-[80%] mx-auto" />
                                    <div>
                                        <Link to="" className="flex gap-4 items-center">
                                            <span className="text-md">Customer submitted orders</span>
                                        </Link>
                                    </div>
                                    <hr className="my-3 w-[80%] mx-auto" />
                                    <div>
                                        <Link to="" className="flex gap-4 items-center">
                                            <span className="text-md">Abc project</span>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="flex items-center gap-7">
                            <div className="relative">
                                <div className="rounded-3xl px-5 py-3 flex gap-2 items-center bg-[#055f5b0a]">
                                    <FiSearch className="text-2xl" />
                                    <input type="text" placeholder="Search..." className="text-sm outline-none border-none bg-transparent w-56" />
                                </div>
                                {
                                    false && <div className="absolute top-12 left-0 bg-white p-3 w-full rounded-lg shadow-lg"></div>
                                }
                            </div>
                            <div className="relative">
                                <div className="relative cursor-pointer" onClick={() => setShowNotification(!showNotification
                                )}>
                                    <GrNotification className="text-2xl cursor-pointer" />
                                    <span className="absolute top-0 right-0 rounded-full w-3 h-3 bg-[#38FF51] border-2 border-white"></span>
                                </div>
                                {
                                    showNotification && <div className="absolute top-16 -left-[160px] bg-white p-4 w-[320px] rounded-lg shadow-2xl z-[999]">
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="bg-[#FFF7E6] p-3 rounded-full text-black">
                                                    <IoMdCheckmark className="text-xl" />
                                                </span>
                                                <span className="text-sm">Request for changing the location have been approved by the admin.</span>
                                            </Link>
                                        </div>
                                        <hr className="my-3 w-[80%] mx-auto" />
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="bg-[#FFF7E6] p-3 rounded-full text-black">
                                                    <RiErrorWarningLine className="text-xl" />
                                                </span>
                                                <span className="text-sm">Shipment have been deloyed due to the issues in delivery services.</span>
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 items-center justify-between">
                                    <img src={profileImg} className="w-12 h-12 rounded-full object-fill cursor-pointer" onClick={() => setShowProfileDropdown(!showProfileDropdown)} />
                                    <span className="text-md">aqsa.design@gmail.com
                                    </span>
                                </div>
                                {
                                    showProfileDropdown && <div className="absolute top-16 left-0 bg-white p-6 w-[230px] rounded-lg shadow-lg z-[999]">
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="text-md">Switch to supplier user</span>
                                            </Link>
                                        </div>
                                        <hr className="my-3 w-[80%] mx-auto" />
                                        <div>
                                            <Link to="" className="flex gap-4 items-center">
                                                <span className="text-md">Switch to Promo site</span>
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </header>
                    <hr className="my-3 w-[95%] mx-auto" />
                    <Outlet />
                </div>
            </main>
            <input type="checkbox" id="logoutModal" className="modal-toggle" />
            <label htmlFor="logoutModal" className="modal cursor-pointer">
                <label className="modal-box relative text-center block" htmlFor="">
                    <h3 className="text-3xl font-bold mt-4 mb-7">LogOut</h3>
                    <p className="py-4 text-sm text-[#5E5E5E]">Are you sure you want to logout from the system?</p>
                    <div className="grid grid-cols-2 gap-4">
                        <label htmlFor="logoutModal" className="capitalize bg-[#E3E3E3] hover:bg-[#055F5B] text-[#055F5B] hover:text-[#FFFFFF] w-full cursor-pointer rounded-lg flex items-center justify-center font-semibold">
                            Cancel
                        </label>
                        <label htmlFor="logoutModal" className="bg-[#055F5B] text-[#FFFFFF] capitalize flex-1 py-3 rounded-lg cursor-pointer hover:bg-[#101a1a] font-semibold">LogOut</label>
                    </div>
                </label>
            </label>
        </>
    )
}

export default V3DahsboardLayout