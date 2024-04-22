import { Button } from "@mui/material";
import Link from "next/link";
import "./dynamicLinksContainer.css";

interface DynamicLinksContainerProps {
	content: { key: string; link: string; name: string }[];
}

const DynamicLinksContainer: React.FC<DynamicLinksContainerProps> = ({
	content,
}) => {
	return (
		<div className="DynamicLinksContainer">
			<div className="row w-100">
				{content.map((item, index) => {
					return (
						<div key={index} className="col-12 col-md-6 py-3">
							<Link href={item.link} passHref target="_blank">
								<Button className="py-3" variant="contained" fullWidth>
									{item.name}
								</Button>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DynamicLinksContainer;
