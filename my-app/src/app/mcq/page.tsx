import Link from "next/link";
import { Button } from "@mui/material";
import content from "../admin/content.json";

const Mcq = () => {
	return (
		<div className="Mcq">
			<div className="container">
				<div className="optionsContainer">
					<div className="row w-100">
						{content.mcq.map((item, index) => {
							return (
								<div key={index} className="col-12 col-md-6 py-3">
									<Link href={`${item.link}`} passHref target="_blank">
										<Button className="py-3" variant="contained" fullWidth>
											{item.name}
										</Button>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mcq;
