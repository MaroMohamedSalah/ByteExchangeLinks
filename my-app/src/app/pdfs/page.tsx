import Link from "next/link";
import content from "../admin/content.json";
import { Button } from "@mui/material";
const Pdfs = () => {
	return (
		<div className="Pdfs">
			<div className="container">
				<div className="optionsContainer">
					<div className="row w-100">
						{content.pdfs.map((item, index) => {
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

export default Pdfs;
