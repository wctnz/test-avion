import cl from "./SectionTwo.module.css"

const SectionTwo = () => {
    return (
        <div className={cl.sectionTwo}>
            <div className={cl.container}>
                <div className={cl.content}>
                    <div className={cl.title}>
                        <h3>What makes our brand different</h3>
                    </div>
                    <div className={cl.row}>

                        <div className={cl.section}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path d="M12 12H3V13.5H12V12Z" fill="#2A254B" />
                                <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="#2A254B" />
                                <path d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z" fill="#2A254B" />
                            </svg>
                            <div className={cl.section__title}>
                                <h4>Next day as standard</h4>
                            </div>
                            <div className={cl.section__desc}>
                                <p>Order before 3pm and get your order
                                    the next day as standard</p>
                            </div>
                        </div>

                        <div className={cl.section}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path d="M10.5 16.0605L6.75 12.3097L7.80976 11.25L10.5 13.9395L16.1888 8.25L17.25 9.31125L10.5 16.0605Z" fill="#2A254B" />
                                <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z" fill="#2A254B" />
                            </svg>

                            <div className={cl.section__title}>
                                <h4>Unbeatable prices</h4>
                            </div>
                            <div className={cl.section__desc}>
                                <p>For our materials and quality you won’t find better prices anywhere</p>
                            </div>
                        </div>

                        <div className={cl.section}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM21 6V8.25H3V6H21ZM3 18V9.75H21V18H3Z" fill="#2A254B" />
                                <path d="M12 15H4.5V16.5H12V15Z" fill="#2A254B" />
                            </svg>

                            <div className={cl.section__title}>
                                <h4>Unbeatable prices</h4>
                            </div>
                            <div className={cl.section__desc}>
                                <p>For our materials and quality you won’t find better prices anywhere</p>
                            </div>
                        </div>

                        <div className={cl.section}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white" />
                                <path d="M18.75 1.5C17.0878 1.50275 15.4651 2.00708 14.0942 2.94704C12.7232 3.887 11.6679 5.21881 11.0662 6.7683C10.5841 6.06903 9.93949 5.49727 9.18767 5.10216C8.43584 4.70705 7.59932 4.50041 6.75 4.5H4.5V6.75C4.50155 8.14191 5.05517 9.47637 6.0394 10.4606C7.02363 11.4448 8.35809 11.9985 9.75 12H10.5V18.787C8.7773 18.9554 7.16718 19.7191 5.94675 20.9465L7.00725 22.0071C7.63464 21.3798 8.39333 20.8995 9.22869 20.6006C10.064 20.3018 10.9553 20.192 11.8382 20.279C12.7211 20.3661 13.5737 20.6478 14.3347 21.104C15.0956 21.5602 15.7459 22.1794 16.2387 22.9172L17.4849 22.0826C16.8701 21.1638 16.0593 20.3926 15.111 19.8244C14.1626 19.2562 13.1002 18.9052 12 18.7965V12H12.75C14.9373 11.9975 17.0343 11.1275 18.5809 9.58089C20.1275 8.03425 20.9975 5.93727 21 3.75V1.5H18.75ZM9.75 10.5C8.75579 10.4989 7.80262 10.1034 7.0996 9.4004C6.39658 8.69738 6.00113 7.74421 6 6.75V6H6.75C7.74423 6.00107 8.69744 6.3965 9.40047 7.09953C10.1035 7.80256 10.4989 8.75577 10.5 9.75V10.5H9.75ZM19.5 3.75C19.498 5.5396 18.7862 7.25534 17.5208 8.52078C16.2553 9.78622 14.5396 10.498 12.75 10.5H12V9.75C12.002 7.9604 12.7138 6.24466 13.9792 4.97922C15.2447 3.71378 16.9604 3.00199 18.75 3H19.5V3.75Z" fill="#2A254B" />
                            </svg>

                            <div className={cl.section__title}>
                                <h4>Recycled packaging</h4>
                            </div>
                            <div className={cl.section__desc}>
                                <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;