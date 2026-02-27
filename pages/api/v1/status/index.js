function status(request, response) {
  return response.status(200).json({ curiosidade: "tenho um garmin!" });
}

export default status;
