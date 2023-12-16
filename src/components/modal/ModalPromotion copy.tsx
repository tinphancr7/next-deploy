import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {AiFillCloseCircle} from "react-icons/ai";

const ModalPromotion = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<div className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
						<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative rounded-lg shadow border-b-2 border-[#AC650E]">
							<h4 className="text-[#AC650E] text-lg font-semibold text-center uppercase">
								lì xì mỗi ngày
							</h4>
							<div
								className="absolute top-4 right-4 cursor-pointer text-[#AC650E]"
								onClick={() => setShowModal(false)}
							>
								<AiFillCloseCircle />
							</div>
							<div className="mb-4">
								<div className="mb-4">
									<span className="text-black font-semibold text-sm">
										Đối tượng áp dụng:
									</span>
									<p className="text-sm">
										Áp dụng cho toàn bộ thành viên của Okchoi có tài khoản chơi
										tại nhà cái NEW88
									</p>
								</div>
								<div className="mb-4">
									<span className="text-black font-semibold text-sm">
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
									<span className="text-black font-semibold text-sm">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPromotion;
