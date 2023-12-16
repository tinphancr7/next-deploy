"use client";

import ModalGetPromotion from "@/components/modal/ModalGetPromotion";
import ModalPromotion from "@/components/modal/ModalPromotion";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function Home() {
	const formattedPrice = (price: number) => {
		return price.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,");
	};

	const [tab, setTab] = useState("offer");
	const renderModal = (tab: string) => {
		switch (tab) {
			case "luckyMoney":
				return (
					<ModalPromotion title="Lì xì mỗi ngày">
						<>
							<div className="mb-4">
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Đối tượng áp dụng:
									</span>
									s
									<p className="text-sm">
										Áp dụng cho toàn bộ thành viên của Okchoi có tài khoản chơi
										tại nhà cái NEW88
									</p>
								</div>
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Quyền lợi:
									</span>
									<p className="text-sm leading-5">
										Cơ hội nhận ngay tiền thưởng mỗi ngày lên tới 888k tại nhà
										cái New88, sau khi nhận được khuyến mãi, tiền sẽ được chuyển
										thẳng vào tài khoản của khách hàng.{" "}
										<span className="text-red-500 font-semibold">
											(4 vòng cược)
										</span>
									</p>
								</div>
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Thể lệ chương trình:
									</span>
									<p className="text-sm leading-5">
										Mỗi thành viên tham gia sẽ đăng nhập vào trang chủ Okchoi và
										thực hiện các nhiệm vụ dưới đây:
									</p>
									<ul className="list-disc text-sm ml-4 ">
										<li>
											Hoàn thành ít nhất 1 lần cho kèo bằng tính năng “Cho Tips”
										</li>
										<li>
											Thời gian xem trực tiếp trận đấu trên Okchoi đạt 45 phút
										</li>
									</ul>
									<div className="flex  gap-1 my-4">
										<span className="font-semibold flex-shrink-0 text-[#AC650E] text-sm">
											Lưu ý:
										</span>
										<ul className="list-disc text-sm ml-4">
											<li>
												Hoàn thành ít nhất 1 lần cho kèo bằng tính năng “Cho
												Tips”
											</li>
											<li>
												Thời gian xem trực tiếp trận đấu trên Okchoi đạt 45 phút
											</li>
										</ul>
									</div>
								</div>
								<p className="text-sm italic">
									Chương trình chỉ áp dụng cho thành viên đăng ký nhà cái NEW88
									thông qua Okchoi. Bạn có thể đăng ký bằng cách{" "}
									<Link href="/" className="text-blue-500 underline">
										Bấm vào đây.
									</Link>
								</p>
							</div>
							<div className=" absolute  left-[50%] -bottom-[22px] -translate-x-[50%] z-[9999]">
								<div className="w-[193px] h-[50px] relative ">
									<Image
										src="/images/btn2.png"
										className="object-cover"
										fill
										alt=""
									/>
								</div>
							</div>
						</>
					</ModalPromotion>
				);
			case "refund":
				return (
					<ModalPromotion title="HỖ TRỢ HOÀN TIỀN">
						<>
							<div className="mb-4">
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Đối tượng áp dụng:
									</span>

									<p className="text-sm">
										Áp dụng cho toàn bộ thành viên của Okchoi có tài khoản chơi
										tại nhà cái NEW88
									</p>
								</div>
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Quyền lợi:
									</span>
									<p className="text-sm leading-5">
										Nhận ngay hoàn tiền dựa vào đơn cược thể thao cao nhất mỗi
										ngày lên tới 188k tại nhà cái New88, sau khi nhận được
										khuyến mãi, tiền sẽ được chuyển thẳng vào tài khoản của
										khách hàng.
									</p>

									<div className="  flex items-center justify-center my-2">
										<div className=" grid grid-cols-12 gap-1 h-full w-[600px] border-2 border-[#AC650E] rounded-lg p-4">
											<div className="col-span-4">
												<div className="text-[#AC650E] font-semibold text-sm text-center">
													Số điểm cược
												</div>
												{[200, 500, 1000, 2000, 4000].map((item, i) => (
													<div
														key={i}
														className="text-center p-2 bg-[#F8E7D1] text-sm font-semibold mb-1 rounded-l-lg"
													>
														{item}+
													</div>
												))}
											</div>
											<div className="col-span-4">
												<div className="text-[#AC650E] font-semibold text-sm text-center">
													Thưởng
												</div>
												{[8000, 18000, 38000, 88000, 188000].map((item, i) => (
													<div
														key={i}
														className="text-center p-2 bg-[#F8E7D1] text-sm font-semibold mb-1 "
													>
														{formattedPrice(item)}
													</div>
												))}
											</div>
											<div className="col-span-4">
												<div className="text-[#AC650E] font-semibold text-sm text-center">
													Số vòng cược yêu cầu
												</div>
												<div className="flex items-center justify-center h-[calc(100%-28px)] bg-[#F8E7D1] text-sm font-semibold rounded-r-lg">
													6
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Thể lệ chương trình:
									</span>
									<p className="text-sm leading-7">
										Mỗi thành viên tham gia sẽ đăng nhập vào trang chủ Okchoi và
										chọn khuyến mãi hỗ trợ hoàn tiền:
									</p>
									<ul className="list-disc text-sm ml-4 ">
										<li className="">
											<div className="flex items-center justify-between">
												<span>
													Tải lên ảnh đơn cược thể thao cao nhất trong ngày tại
													nhà cái NEW88
												</span>
												<label
													htmlFor="file"
													className="bg-[#F8E7D1] py-1 px-6 rounded cursor-pointer inline-flex "
												>
													Tải ảnh lên
												</label>
											</div>
											<input type="file" id="file" hidden />
										</li>
										<li>
											Nhập tên tài khoản tại nhà cái NEW88 và chờ xác nhận
										</li>
									</ul>
									<div>
										<input
											type="text"
											className="p-2 rounded-md border border-[#AC650E] w-full my-2 focus:outline-none text-sm"
											placeholder="Nhập tên tài khoản"
										/>
									</div>
									<div className="flex  gap-1 my-4">
										<span className="font-semibold flex-shrink-0 text-[#AC650E] text-sm">
											Lưu ý:
										</span>
										<ul className="text-sm ">
											<li>
												+ Mỗi thành viên chỉ có cơ hội nhận thưởng 1 lần/ngày
											</li>
										</ul>
									</div>
								</div>
								<p className="text-sm italic">
									Chương trình chỉ áp dụng cho thành viên đăng ký nhà cái NEW88
									thông qua Okchoi. Bạn có thể đăng ký bằng cách{" "}
									<Link href="/" className="text-blue-500 underline">
										Bấm vào đây.
									</Link>
								</p>
							</div>
							<div className=" absolute  left-[50%] -bottom-[22px] -translate-x-[50%] z-[9999]">
								<div className="w-[250px] h-[50px] relative ">
									<Image
										src="/images/btn3.png"
										className="object-cover"
										fill
										alt=""
									/>
								</div>
							</div>
						</>
					</ModalPromotion>
				);
			case "offer":
				return (
					<ModalPromotion title="ưu đãi nạp lại">
						<>
							<div className="mb-6">
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Đối tượng áp dụng:
									</span>

									<p className="text-sm">
										Áp dụng cho toàn bộ thành viên của Okchoi có tài khoản chơi
										tại nhà cái NEW88
									</p>
								</div>
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Quyền lợi:
									</span>
									<p className="text-sm leading-5">
										Cơ hội nhận ngay tiền thưởng cho lần nạp 2 lên tới 550k tại
										nhà cái New88, sau khi nhận được khuyến mãi, tiền sẽ được
										chuyển thẳng vào tài khoản của khách hàng.
									</p>

									<div className="  flex items-center justify-center my-2">
										<div className=" grid grid-cols-12 gap-1 h-full w-[600px] border-2 border-[#AC650E] rounded-lg p-4">
											<div className="col-span-4">
												<div className="text-[#AC650E] font-semibold text-sm text-center">
													Gói hỗ trợ
												</div>
												{[20, 30, 40, 50, 60, 70].map((item, i) => (
													<div
														key={i}
														className="text-center p-2 bg-[#F8E7D1] text-sm font-semibold mb-1 rounded-l-lg"
													>
														{item}%
													</div>
												))}
											</div>
											<div className="col-span-4">
												<div className="text-[#AC650E] font-semibold text-sm text-center">
													Hỗ trợ tối đa
												</div>
												{[550000, 450000, 350000, 250000, 150000, 50000].map(
													(item, i) => (
														<div
															key={i}
															className="text-center p-2 bg-[#F8E7D1] text-sm font-semibold mb-1 "
														>
															{formattedPrice(item)}
														</div>
													)
												)}
											</div>
											<div className="col-span-4">
												<div className="text-[#AC650E] font-semibold text-sm text-center">
													Số vòng cược yêu cầu
												</div>
												{[4, 6, 8, 10, 12, 14].map((item, i) => (
													<div
														key={i}
														className="text-center p-2 bg-[#F8E7D1] text-sm font-semibold mb-1 "
													>
														{item}
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
								<div className="mb-4">
									<span className="text-black font-bold text-sm">
										Thể lệ chương trình:
									</span>
									<p className="text-sm leading-7">
										Mỗi thành viên tham gia sẽ đăng nhập vào trang chủ Okchoi và
										chọn khuyến mãi ưu đãi nạp lại:
									</p>
									<ul className="list-disc text-sm ml-4 ">
										<li className="">
											<div className="flex items-center justify-between">
												<span>
													Tải lên ảnh giao dịch nạp tiền lần 2 tại nhà cái NEW88
												</span>
												<label
													htmlFor="file"
													className="bg-[#F8E7D1] py-1 px-6 rounded cursor-pointer inline-flex "
												>
													Tải ảnh lên
												</label>
											</div>
											<input type="file" id="file" hidden />
										</li>
										<li>
											Nhập tên tài khoản tại nhà cái NEW88 và chờ xác nhận
										</li>
									</ul>
									<div>
										<input
											type="text"
											className="p-2 rounded-md border border-[#AC650E] w-full my-2 focus:outline-none text-sm"
											placeholder="Nhập tên tài khoản"
										/>
									</div>
									<div className="flex  gap-1 my-4">
										<span className="font-semibold flex-shrink-0 text-[#AC650E] text-sm">
											Lưu ý:
										</span>
										<ul className="text-sm ">
											<li>+ Mỗi thành viên chỉ có cơ hội nhận thưởng 1 lần</li>
										</ul>
									</div>
								</div>
								<p className="text-sm italic">
									Chương trình chỉ áp dụng cho thành viên đăng ký nhà cái NEW88
									thông qua Okchoi. Bạn có thể đăng ký bằng cách{" "}
									<Link href="/" className="text-blue-500 underline">
										Bấm vào đây.
									</Link>
								</p>
								<div className="flex items-center justify-between">
									<span>Chọn gói hỗ trợ:</span>
									<div className="flex items-center gap-2">
										{[20, 30, 40, 50, 60, 70].map((item, i) => (
											<button
												key={i}
												className="bg-[#F8E7D1] py-1 px-6 rounded cursor-pointer inline-flex"
											>
												{item}%
											</button>
										))}
									</div>
								</div>
							</div>
							<div className=" absolute  left-[50%] -bottom-[22px] -translate-x-[50%] z-[9999]">
								<div className="w-[250px] h-[50px] relative ">
									<Image
										src="/images/btn3.png"
										className="object-cover"
										fill
										alt=""
									/>
								</div>
							</div>
						</>
					</ModalPromotion>
				);

			default:
				break;
		}
	};
	return <div>{renderModal(tab)}</div>;
}
