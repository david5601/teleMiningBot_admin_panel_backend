exports.verifyWebhookSignature = (key, data, signature)  => {

	const expectedSignature = crypto.createHmac('sha256', key)
        .update(data)
        .digest('hex');

	return expectedSignature === signature;
}
